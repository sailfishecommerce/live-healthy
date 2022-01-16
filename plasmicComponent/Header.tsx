/* eslint-disable @next/next/no-img-element */
import Topbar from "@/components/Topbar";
import Nav from "@/components/Nav";

interface HeaderProps {
  logo?: any;
  support: string;
  topbarBgColor: string;
  navBgColor: string;
  slider?: any;
}

export default function Header({
  logo,
  navBgColor,
  topbarBgColor,
  support,
  slider,
}: HeaderProps) {
  return (
    <header className="shadow-sm w-100">
      <Topbar support={support} topbarBgColor={topbarBgColor}>
        {slider}
      </Topbar>
      <Nav logo={logo} navBgColor={navBgColor} />
    </header>
  );
}
