import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Layout as AntLayout } from "antd";

export const Layout = (props) => {
  return (
    <AntLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header></Header>
      <AntLayout>
        <AntLayout.Content>{props.children}</AntLayout.Content>
        <Footer></Footer>
      </AntLayout>
    </AntLayout>
  );
};
