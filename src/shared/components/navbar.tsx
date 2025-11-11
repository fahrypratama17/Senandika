import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <section className="flex w-[80%] h-[20vh] justify-center items-center mx-auto sticky top-0 z-5">
      <NavigationMenu className="flex justify-between items-center w-full max-w-6xl border-2 rounded-2xl p-3 px-6 backdrop-blur-2xl">
        <NavigationMenuList className="flex w-full justify-between">

            <NavigationMenuItem className="flex-1 w-full">
              <NavigationMenuLink className="text-[18px] cursor-pointer">Logo</NavigationMenuLink>
            </NavigationMenuItem>

        </NavigationMenuList>

        <NavigationMenuList className="flex w-full justify-between gap-4">

          <NavigationMenuItem className="flex-1 w-full">
            <NavigationMenuLink className="text-[18px] cursor-pointer ">Home</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex-1 w-full">
            <NavigationMenuLink className="text-[18px] cursor-pointer">About</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex-1 w-full">
            <NavigationMenuLink className="text-[18px] cursor-pointer">Services</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex-1 w-full">
            <NavigationMenuLink className="text-[18px] cursor-pointer">Contact</NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>

        <NavigationMenuList className="flex w-full justify-between">

            <NavigationMenuItem className="flex-1 w-full">
              <NavigationMenuLink className="text-[18px] cursor-pointer">Login</NavigationMenuLink>
            </NavigationMenuItem>

        </NavigationMenuList>
        
      </NavigationMenu>
    </section>
  );
}