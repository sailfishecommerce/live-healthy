import PrimaryMenu from "@/components/menu/PrimaryMenu";
import SecondaryMenu from "@/components/menu/SecondaryMenu";
import { useMediaQuery } from "@/hooks";
import useNav from "@/hooks/useNav";
import Container from "@/layout/Container";
import MobileSearchbar from "@/components/search/MobileSearchbar";

export default function Menu() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const { showMobileSearch, mobileMenu } = useNav();

  return (
    <nav>
      <Container className="md:px-0 px-4 pb-3 md:pb-0">
        <PrimaryMenu />
        {!mobileWidth && <SecondaryMenu />}
        {mobileWidth && showMobileSearch && <MobileSearchbar />}
      </Container>
    </nav>
  );
}
