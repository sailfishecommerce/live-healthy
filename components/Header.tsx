import Topbar from "@/components/Topbar";
import styles from "@/styles/ui.module.css";
import HeaderSlider from "@/components/Carousel/HeaderSlider";
import Nav from "@/components/Nav";

interface HeaderProps {
  support: string;
  topbarBgColor: string;
  slider?: any;
  nav?: any;
}

export default function Header({ topbarBgColor, support }: HeaderProps) {
  return (
    <header className={`${styles.header} shadow-sm w-100`}>
      <Topbar support={support} topbarBgColor={topbarBgColor}>
        <HeaderSlider />
      </Topbar>
      <Nav />
    </header>
  );
}

// Header.whyDidYouRender = true;
