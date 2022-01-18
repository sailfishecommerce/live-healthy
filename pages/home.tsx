import { PlasmicComponent } from "@plasmicapp/loader-react";
import { PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";

export default function Homepage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Nav" />
    </PlasmicRootProvider>
  );
}
