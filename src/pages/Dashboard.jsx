import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/DashHeader";
import { useEffect, useState } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import JobList from "../components/JobList";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ApplyForm from "../components/ApplyForm";
import AppliedSuccess from "../components/AppliedSuccess";


const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

const Dashboard = () => {
  const [setAPIData] = useState();
  const [setCoinHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = useSelector((state) => state.username.username);
  

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1d`
        );
        setCoinHistory(data.prices);
        setAPIData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        alert("API request limit reached pls request after few-mins...");
        setLoading(false);
      }
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <div className="dashb__container">
          <SideBar />

          <div className="main__dashboard__container">
            {/* Dhashboard-Header */}
            <DashHeader />

            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/apply/:jobId" element={<ApplyForm />} />
          <Route element={<ProtectedRoutes username={username} />}>
          </Route>
          <Route path="/jobs/applied" element={<AppliedSuccess />} />
        </Routes>
           
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
