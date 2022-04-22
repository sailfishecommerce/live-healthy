import Applayout from "@/layout/Applayout";
import ContactBanner from "@/components/banners/ContactusBanner";
import ContactusCard from "@/components/cards/ContactusCard";
import ContactusMap from "@/components/map";
import ContactForm from "@/components/form/ContactForm";
import PartnerOutlet from "@/components/page-view/PartnerOutlet";


export default function ContactUs() {
  return (
    <Applayout title="Contact us">
      <ContactBanner />
      <ContactusCard />
      <PartnerOutlet />
      <div
        className="w-full flex-col lg:flex-row flex m-auto justify-between"
        id="map"
      >
        <ContactusMap />
        <ContactForm />
      </div>
    </Applayout>
  );
}
