import logo from '../../assets/logo.png';

export default function Logo() {
  return (
    // <div
    //   className={`inline-grid place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md ${className}`}
    //   style={{ width: size, height: size }}
    //   aria-label="NWA logo"
    // >
    //   <span
    //     className="font-black tracking-tight"
    //     style={{ fontSize: size * 0.44 }}
    //   >
    //     AWA
    //   </span>
    // </div>

    <div>
      <img src={logo} width={160} height={140} alt="logo" />
    </div>
  );
}
