import React from "react";
import Card from "./Common/Card";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col left">
          <h1 className="header">Billing & Accounts</h1>
          <Card
            head="Human Resource"
            paragraph="human resource"
            cost="40,000"
          />
          <Card
            head="Payroll Module"
            paragraph="Payroll and salary payment"
            cost="60,000"
          />
          <Card head="Leave Management" paragraph="leave" cost="30,000" />
        </div>
        <div className="col right">
          <h1 className="cloudlet">CloudletHR</h1>
          <p>
            Industry tested no1 software solution for modern human resource
            provider over the world
          </p>
          <div className="centered">
            <h2 className="head">Paying</h2>
            <br />
            <h2>N 40,000 NGN</h2>
            <br />
            <p className="employees">for 300 employees</p>
          </div>
          <button className="btn">Make Payment</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
