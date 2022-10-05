import React from "react";

const Page = ({ children, modifiers }) => {
  const defaultPage = "w-screen h-screen";

  return <div className={`${defaultPage} ${modifiers}`}>{children}</div>;
};

export default Page;
