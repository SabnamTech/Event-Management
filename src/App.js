import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ExploreEvents from "./pages/ExploreEvents";
import HostEvent from "./pages/HostEvent";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";

import CreateEvent from "./pages/CreateEvent";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<ExploreEvents />} />

        <Route path="/host" element={<HostEvent />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard/>}/>

       

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/create-event" element={<CreateEvent />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;