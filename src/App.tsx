import { useState } from "react";
import "./App.css";
import Customers from "./pages/Customers/Customers";
import Layout from "./pages/Layout/Layout";

function App() {

  return (
  <Layout>
    <Customers />
  </Layout>
  );
}

export default App;
