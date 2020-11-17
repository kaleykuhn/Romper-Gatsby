import React from "react";
import Layout from "../components/layout";
import { ExampleButton } from "../components/button";

export default () => (
   <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
         hello from gatsby
      </h1>
      <h1>Hello world</h1>
      <h1>Hello people</h1>
      <ExampleButton>click this!</ExampleButton>
   </Layout>
);
