
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import razorpay, os, hmac, hashlib

load_dotenv()

app = Flask(__name__)
CORS(app)

client = razorpay.Client(
    auth=(
        os.getenv("RAZORPAY_KEY_ID"),
        os.getenv("RAZORPAY_KEY_SECRET")
    )
)

@app.route("/create-order", methods=["POST"])
def create_order():
    data = request.get_json()
    amount = data.get("amount", 2499)

    order = client.order.create({
        "amount": int(amount * 100),
        "currency": "INR",
        "payment_capture": 1
    })

    return jsonify(order)

@app.route("/verify-payment", methods=["POST"])
def verify_payment():
    data = request.get_json()

    generated_signature = hmac.new(
        bytes(os.getenv("RAZORPAY_KEY_SECRET"), "utf-8"),
        bytes(
            f"{data['razorpay_order_id']}|{data['razorpay_payment_id']}",
            "utf-8"
        ),
        hashlib.sha256
    ).hexdigest()

    return jsonify({
        "success": generated_signature == data["razorpay_signature"]
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
