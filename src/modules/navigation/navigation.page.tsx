import { NavigationTop } from "@/modules/navigation/components/navigation-top";
import { NavigationItems } from "@/modules/navigation/components/navigation-items";
import { NavigationLinks } from "@/modules/navigation/components/navigation-links";

export function NavigationPage() {
  return (
    <div className="bg-(--menu-background) relative w-screen h-screen flex flex-col justify-between">
      <NavigationTop />
      <NavigationItems />
      <NavigationLinks />
    </div>
  );
}
