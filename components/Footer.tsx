import dynamic from "next/dynamic";
import useMediaQuery from "@/hooks/useMediaQuery";
import FooterBottomSection from "./FooterBottomSection";
import FooterTopSection from "./FooterTopSection";

const BottomTab = dynamic(() => import("@/components/BottomTab"));

export default function Footer() {
  const tabWidth = useMediaQuery("(max-width:768px)");

  return (
    <footer className="footer w-100">
      <FooterTopSection />
      <FooterBottomSection />
      {tabWidth ? <BottomTab /> : null}
    </footer>
  );
}

// Footer.whyDidYouRender = true;
