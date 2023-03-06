import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import QRCode from "./components/QRCode";
import ResultsSummary from "./components/ResultsSummary";

type Props = {};

const Router = (props: Props) => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<QRCode />} />
        <Route path="results-summary" element={<ResultsSummary />} />
        <Route path="*" element={<>No match 404</>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
