import React from "react";
import "./style.css";

function IpInfo({ ipDataArr }) {
  return (
    <>
      <div className="ipInfo">
        <h1>Ip Information</h1>
        {ipDataArr.map((data, key) => (
          <div className="ip-info-row" key={key}>
            <h2>{data[0]}</h2>
            <h2 className="ip-info-row-data2">{data[1]}</h2>
            {data[0] === "proxy" &&
              (data[1] === true ? (
                <h2 className="ip-proxy-true">True</h2>
              ) : (
                <h2 className="ip-proxy-false">False</h2>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default IpInfo;
