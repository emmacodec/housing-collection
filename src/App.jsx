import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";


import Header from "./components/header";
import Footer from "./components/footer";

// importing page folder
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} />
          <Route path="/Home" Component={Home} />
          <Route path="/PropertyDetails" Component={PropertyDetails} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
