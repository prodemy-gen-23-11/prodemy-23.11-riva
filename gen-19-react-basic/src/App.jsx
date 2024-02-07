import React from "react";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Banner from "./layouts/Banner";
import Footer from "./layouts/Footer";
import Button from "./components/Button";
import Content from "./layouts/Content";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <Content />

      <div className="flex justify-center">
        <Button buttonName={"View More"} />
      </div>

      <Footer />
    </>
  );
}
