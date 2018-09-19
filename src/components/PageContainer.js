import React, { Fragment } from "react";

import Header from "../components/Header";

const PageCont = (props) =>
  <Fragment>
    <Header />
    <div className="container">
      <h2 className="page-name h2">{props.name}</h2>
      {props.children}
    </div>
  </Fragment>

export default PageCont;
