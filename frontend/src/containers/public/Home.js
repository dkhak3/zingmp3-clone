import React, { useEffect } from "react";
import { Header } from "../../components";
import * as apis from "../../apis";

const Home = () => {
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await apis.getHome();
      console.log("🚀 ~ file: Home.js:9 ~ fetchDataHome ~ response:", response);
    };
    fetchDataHome();
    console.log(
      "🚀 ~ file: Home.js:8 ~ fetchDataHome ~ fetchDataHome:",
      fetchDataHome
    );
  }, []);

  return (
    <div className="overflow-y-auto">
      <div className="h-[70px] px-[59px] flex items-center">
        <Header />
      </div>
    </div>
  );
};

export default Home;
