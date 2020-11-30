import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  //Take an instance of our marketing app and render in div below
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
