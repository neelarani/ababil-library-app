type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <div
      className={`inline-grid place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md ${className}`}
      style={{ width: size, height: size }}
      aria-label="NWA logo"
    >
      <span
        className="font-black tracking-tight"
        style={{ fontSize: size * 0.44 }}
      >
        NWA
      </span>
    </div>
  );
}
