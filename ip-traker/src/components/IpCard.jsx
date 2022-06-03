import React from "react";
import "./style.css";

function IpCard({ ipAdd }) {
  return (
    <div className="ip-card">
      <h1 className="ip-address">{ipAdd}</h1>
    </div>
  );
}

export default IpCard;
