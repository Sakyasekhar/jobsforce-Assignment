import React from "react";
import HamburgerMenu from "../hamburger";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 w-full">
      <Image
        src={"/asserts/icons/cuberto-logo.svg"}
        width={60}
        height={60}
        className="sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px]"
        alt="LOGO"
      />
      <HamburgerMenu handleMenuClick={handleMenuClick} />
    </div>
  );
}
