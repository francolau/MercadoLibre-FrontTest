import React from "react";
import Header from "./Header";

const Index = ({ children, search, setItems, setSearch }) => {
  return (
    <section>
      <Header search={search} setItems={setItems} setSearch={setSearch}/>
      <main>{children}</main>
    </section>
  );
};

export default Index;
