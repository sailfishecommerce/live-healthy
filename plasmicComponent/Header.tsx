/* eslint-disable @next/next/no-img-element */
import Topbar from "@/components/Topbar";
import Nav from "@/components/Nav";

interface HeaderProps {
  logo?: any;
  headerSliderText1: string;
  headerSliderText2: string;
  headerSliderText3: string;
  support: string;
  topbarBgColor: string;
  navBgColor: string;
  local?: boolean;
  icon1: string;
  icon2: string;
  icon3: string;
}

export default function Header({
  logo,
  headerSliderText1,
  headerSliderText2,
  headerSliderText3,
  navBgColor,
  icon1,
  icon2,
  icon3,
  topbarBgColor,
  support,
  local,
}: HeaderProps) {
  const sliderContent = [
    {
      text: headerSliderText1,
      icon: icon1,
    },
    { text: headerSliderText2, icon: icon2 },
    { text: headerSliderText3, icon: icon3 },
  ];

  return (
    <header className="shadow-sm w-100">
      <Topbar
        support={support}
        sliderContent={sliderContent}
        topbarBgColor={topbarBgColor}
      />
      <Nav local={local} logo={logo} navBgColor={navBgColor} />
    </header>
  );
}
