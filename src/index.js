import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Header from "./Componentes/Header";
import Menu from "./Componentes/Menu";
import Content from "./Componentes/Content";
import Sidebar from "./Componentes/Sidebar";
import Footer from "./Componentes/Footer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="grid-layout">
    <div class="caja c1">
      <Header title="The Home Academy" />
    </div>

    <div class="caja c2">
      <Menu />
    </div>

    <div class="caja c3">
      <Content />
    </div>

    <div class="caja c4">
      <Sidebar />
    </div>

    <div class="caja c5">
      <Footer />
    </div>
  </div>
);
reportWebVitals();
