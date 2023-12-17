import React from "react";
import Footer from "./layouts/footer.tsx";
import Header from "./layouts/header.tsx";
import Sidebar from "./layouts/sidebar.tsx";

const AppWrapper=() => {
  //const { children } = props;
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default AppWrapper;
