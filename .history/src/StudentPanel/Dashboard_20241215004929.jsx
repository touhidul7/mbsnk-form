import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ data }) => {
    const backendApiUrl = import.meta.env.VITE_API_BASE_URL;
 
    

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="mb-20"><Navbar data={data} /></div>
            <Outlet context={{ data }} />
        </div>
    );
};

export default Dashboard;