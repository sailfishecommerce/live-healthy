/* eslint-disable @next/next/no-img-element */
import useMediaQuery from "@/hooks/useMediaQuery";
import BottomTab from "./BottomTab";
import FooterBottomSection from "./FooterBottomSection";
import FooterTopSection from "./FooterTopSection";

interface FooterProps {
  topSectionBgColor: string;
  bottomSectionBgColor: string;
}
export default function Footer({
  topSectionBgColor,
  bottomSectionBgColor,
}: FooterProps) {
  const tabWidth = useMediaQuery("(max-width:768px)");

  return (
    <footer className="footer w-100">
      <FooterTopSection topSectionBgColor={topSectionBgColor} />
      <FooterBottomSection bottomSectionBgColor={bottomSectionBgColor} />
      {tabWidth ? <BottomTab /> : null}
    </footer>
  );
}

Footer.whyDidYouRender = true;
