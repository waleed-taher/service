import Link from "next/link";

const HeaderOptions = () => {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex xl:gap-20 lg:mx-10 items-center lg:gap-8">
        <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal  text-xl ">
          <Link href={"#"}>Home</Link>
        </li>
        <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-xl">
          <Link href={"#"}>About</Link>
        </li>
        <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-xl">
          <Link href={"#"}>Services</Link>
        </li>
        <li className="font-spaceGrotesk hover:text-primary-color active:text-primary-color active:font-medium tracking-[0] leading-normal text-xl">
          <Link href={"#"}>Staffing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderOptions;
