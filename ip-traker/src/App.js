import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import IpCard from "./components/IpCard";
import IpInfo from "./components/IpInfo";
// import tempRes from "./tempResponse";

function App() {
  const [ipData, setIpData] = useState([]);

  const fetchIp = async () => {
    try {
      const apiResponse = await axios.get(
        "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,proxy,query"
      );
      console.log(apiResponse);
      setIpData(apiResponse.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchIp();
    // this is temp response
    // setIpData(tempRes);
  }, []);
  // console.log(ipData);
  let tarr = Object.entries(ipData);
  // console.log(tarr);

  return (
    <div className="app">
      <div className="ip-app">
        <IpCard ipAdd={ipData.query} />
        <IpInfo ipDataArr={tarr} />
      </div>
    </div>
  );
}

export default App;
