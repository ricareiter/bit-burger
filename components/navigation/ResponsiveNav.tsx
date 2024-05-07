"use client";

import Nav from "@/components/navigation/Nav";
import MobileNav from "@/components/navigation/MobileNav";
import { useState } from "react";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handlerNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <Nav handlerNav={handlerNav} />
      <MobileNav showNav={showNav} handlerNav={handlerNav} />
    </div>
  );
};

export default ResponsiveNav;
