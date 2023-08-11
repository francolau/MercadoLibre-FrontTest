import React from "react";
import Header from "./Header";

const Index = ({ children, search, setItems, setSearch }) => {
  return (
    <section className="bg-slate-200 min-h-screen min-w-full flex flex-col pb-6">
      <Header search={search} setItems={setItems} setSearch={setSearch}/>
      <main className="pt-12 self-center w-7/12">{children}</main>
    </section>
  );
};

export default Index;
