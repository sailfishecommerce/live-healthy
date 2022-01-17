/* eslint-disable @next/next/no-img-element */
import Topbar from "@/components/Topbar";

interface HeaderProps {
  support: string;
  topbarBgColor: string;
  slider?: any;
  children?: any;
}

export default function Header({
  topbarBgColor,
  support,
  slider,
  children,
}: HeaderProps) {
  return (
    <header className="shadow-sm w-100">
      <Topbar support={support} topbarBgColor={topbarBgColor}>
        {slider}
      </Topbar>
      {children}
    </header>
  );
}
