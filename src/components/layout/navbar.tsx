import { Link } from "next-view-transitions";

export function Navbar() {
  return (
    <div className="px-4 py-2.5 fixed z-100 top-0 left-0 w-screen flex justify-between items-center text-xs uppercase">
      <div className="font-medium tracking-tighter overflow-hidden">
        <p className="navigation-top-text">Andrianjaka Tony</p>
      </div>
      <div className="font-medium tracking-tighter overflow-hidden">
        <Link href="/navigation" className="navigation-top-text block">
          Menu
        </Link>
      </div>
    </div>
  );
}
