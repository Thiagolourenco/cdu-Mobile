import React from "react";
import { useSelector } from "react-redux";

import createRouter from "./routes";

function Index() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}

export default Index;
