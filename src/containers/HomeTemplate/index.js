import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_components/Navbar";
export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <div>
        <Navbar/>
      <Route exact={exact} path={path} component={component} />
    </div>
  );
}
