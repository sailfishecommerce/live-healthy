import React from "react";

// Make sure to only include the library in development
if (typeof window !== undefined && process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");

  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}