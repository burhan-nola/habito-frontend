"use client";

import { useEffect } from "react";

export default function BoostrapInstall() {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
}
