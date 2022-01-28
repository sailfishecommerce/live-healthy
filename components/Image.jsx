import NextImage from "next/image";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

const Image = (props) => {
  const [loading, setLoading] = useState(props.loading);

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "30px",
  });

  useEffect(() => {
    // Skip if image is already eager or has priority (disables lazy loading)
    if (props.loading === "eager" || props.priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer;
      // Set loading to eager if all resources of document are loaded, but defer it a bit
      const onLoad = () => {
        clearDefer = defer(() => setLoading("eager"));
      };
      window.addEventListener("load", onLoad);
      return () => {
        // Clean up the load event listener and an eventual defer
        window.removeEventListener("load", onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [props.loading, props.priority]);

  const styles = props?.slider
    ? { width: "unset", height: "unset" }
    : { width: `${props.width}px`, height: `${props.height}px` };

  return (
    <div
      className="lazyImageWrapper"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
      ref={observe}
    >
      {inView && <NextImage loading={loading} {...props} />}
    </div>
  );
};

const isMobileConnection = () => {
  const connection =
    navigator.connection ||
    navigator?.mozConnection ||
    navigator?.webkitConnection;
  return (
    connection?.type === "cellular" ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "3g" ||
    connection?.saveData === true
  );
};

const defer = (callback) => {
  // Check if we can use requestIdleCallback
  if (window.requestIdleCallback) {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  // Just defer using setTimeout with some random delay otherwise
  const handle = setTimeout(callback, 2345 + Math.random() * 1000);
  return () => clearTimeout(handle);
};

export default Image;
