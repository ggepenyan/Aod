import React from "react";
import Sticky from 'react-sticky-el';
import { Link } from "react-router-dom";

import PageCont from "../components/PageContainer";
import Table from "../components/Table";

const Home = () =>
  <PageCont name="Пользователи">
    <div className="tabs d-flex flex-wrap">
      <Link to="/" className="tab main-link">сотрудники</Link>
      <Link to="/" className="tab main-link active">учащиеся</Link>
      <Link to="/" className="tab main-link">родители</Link>
    </div>
    <section className="main-content">
      <Sticky>
        <div className="headline">
          <h3 className="h3">Сотрудники</h3>
        </div>
      </Sticky>
      <Table/>
    </section>
  </PageCont>;

export default Home;
