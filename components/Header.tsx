import dynamic from "next/dynamic";
import Topbar from "@/components/Topbar";
import styles from "@/styles/ui.module.css";

const Nav = dynamic(() => import("@/components/Nav"));

export default function Header() {
  return (
    <header className={`${styles.header} shadow-sm w-100`}>
      <Topbar />
      <Nav />
    </header>
  );
}

// Header.whyDidYouRender = true;
