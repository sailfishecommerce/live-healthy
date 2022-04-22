import ContactMap from "@/components/map";
import ContactForm from "@/components/form/ContactForm";

export default function ContactusMapFormView() {
  return (
    <div
      className="w-full flex-col lg:flex-row flex m-auto justify-between"
      id="map"
    >
      <ContactMap />
      <ContactForm />
    </div>
  );
}
