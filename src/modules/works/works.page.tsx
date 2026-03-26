import { Link } from "next-view-transitions";

export function WorksPage() {
  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center">
      <Link href="/navigation" className="text-xs uppercase tracking-tighter font-normal">
        Open Menu
      </Link>
    </div>
  );
}
