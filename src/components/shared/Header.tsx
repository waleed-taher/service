"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import Logo from "@/app/assets/gtechlogo.svg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Container from "@/components/Container/Container";
import Link from "next/link";
import Button from "@/components/shared/Button";
import HeaderOptions from "@/components/UI/HeaderOptions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <header className="lg:bg-[#F1F1F1CC] lg:shadow-lg">
      <Container>
        <div className="flex justify-between items-center lg:justify-evenly">
          <Image src={Logo} alt="G-Tech Logo" />
          <div>
            <button
              type="button"
              onClick={handleClick}
              className={isOpen ? "hidden" : "lg:hidden"}
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>
          <HeaderOptions />
          <div className="max-lg:hidden">
            <button className="rounded-[10px] overflow-hidden border border-solid border-primary-color px-6 py-3 text-primary-color hover:text-white hover:bg-blue-500">
              Contact Us
            </button>
          </div>
          {isOpen && (
            <div className="absolute top-0 right-0 z-10 w-3/5 h-screen bg-primary-color bg-opacity-20 xsm:w-3/5">
              <button
                type="button"
                className="absolute right-2 top-[32px] md:right-8 md:top-[32px]"
                onClick={handleClick}
              >
                <RxCross2 size={24} />
              </button>
              <nav className="absolute top-32 left-[55px]  xsm:left-[80px] md:left-[200px] md:top-36">
                <ul className="flex flex-col gap-4 items-start">
                  <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-2xl">
                    <Link href={"#"}>Home</Link>
                  </li>
                  <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-2xl">
                    <Link href={"#"}>About</Link>
                  </li>
                  <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-2xl">
                    <Link href={"#"}>Services</Link>
                  </li>
                  <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-2xl">
                    <Link href={"#"}>Staffing</Link>
                  </li>
                </ul>
              </nav>
              <Button
                title="Contact Us "
                className="border-primary-color absolute top-[360px] left-[42px] xsm:left-[70px] md:top-96 md:left-[193px]"
                divClassName="text-primary-color"
              />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
