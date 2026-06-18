import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
console.log("API URL:", API_URL); // add this

function App() {
  const [serverReady, setServerReady] = useState(false);
  useEffect(() => {
    const checkServer = async () => {
      try {
        await axios.get(`${API_URL}/health`);

        setServerReady(true);
      } catch (err) {
        setTimeout(checkServer, 3000);
      }
    };

    checkServer();
  }, []);
  if (!serverReady) {
    return <LoadingPage />;
  }
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loading" element={<LoadingPage />} />
    </Routes>
  );
}

export default App;
