import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";

export default function Error404() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="/error" />
    </PlasmicRootProvider>
  );
}
