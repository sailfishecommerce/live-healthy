import Menu from "@/components/Menu";
import useScroll from "@/hooks/useScroll";
import NavTop from "./NavTop";

export default function Nav() {
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > 400 ? true : false;
  const navStyle = scrollUp ? "navbar-sticky navbar-stuck" : "navbar-sticky";

  return (
    <nav className={navStyle}>
      <NavTop />
      <Menu />
    </nav>
  );
}

// Nav.whyDidYouRender = true;
