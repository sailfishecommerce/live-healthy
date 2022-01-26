import Topbar from "@/components/Topbar";
import styles from "@/styles/ui.module.css";

interface HeaderProps {
  support: string;
  topbarBgColor: string;
  slider?: any;
  nav?: any;
}

export default function Header({
  topbarBgColor,
  support,
  slider,
  nav,
}: HeaderProps) {
  return (
    <header className={`${styles.header} shadow-sm w-100`}>
      <Topbar support={support} topbarBgColor={topbarBgColor}>
        {slider}
      </Topbar>
      {nav}
    </header>
  );
}

Header.whyDidYouRender = true;
