import { Link } from "@tanstack/react-router";

export function Brand({ small = false }: { small?: boolean }) {
  return (
    <Link to="/" className="block text-center group">
      <div className={small ? "text-xs tracking-luxe text-muted-foreground" : "text-sm tracking-luxe text-muted-foreground mb-3"}>
        Nine Profiles
      </div>
      <h1 className={small ? "font-display text-xl" : "font-display text-3xl md:text-5xl"}>
        The Personal Style Lab
      </h1>
      {!small && (
        <p className="mt-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
          Style for the Life You're Building
        </p>
      )}
    </Link>
  );
}
