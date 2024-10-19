import { useState } from "react";

import { Grip } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Container from "./container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar Parent */}
      <nav className="relative z-10 border-b bg-background">
        {/* Setting the Width of the Navbar */}
        {/* <div className="lg:px-34 2xl:px-54 xl:px-200 mx-auto px-4 sm:px-14 md:px-96"></div> */}
        <Container>
          {/* Setting the Height of the Navbar */}
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="/icons/pwa-512x512.png"
                alt="Logo"
              />
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  variant="ghost"
                  size="icon"
                  className="mr-4"
                >
                  <Grip className="h-10 w-10" />
                </Button>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative mr-2 h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="@user"
                        />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      <div
        className={`absolute left-0 right-0 top-0 border-b bg-background transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-[100vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <Container className="mt-16 flex flex-col pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="@user"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-primary">
                User Name
              </div>
              <div className="text-sm font-medium leading-none text-muted-foreground">
                user@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Profile
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Settings
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Sign out
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
