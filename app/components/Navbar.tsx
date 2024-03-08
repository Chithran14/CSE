import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const App: React.FC = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href={"/Technical"}>
            TECHNICAL-EVENT
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href={"/Nontechnical"} aria-current="page">
            NON-TECHNICAL
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            CONTACT
          </Link>
        </NavbarItem> 
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default App;

