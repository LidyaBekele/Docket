import { Logo } from "./logo";
import { Button } from "@/components/ui/button";


export const Footer = () => {
  return (
    <div
      className="flex items-center w-full  bg-background
        z-50 p-6">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end
      flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms of Service
        </Button>
      </div>
    </div>
  );
};
