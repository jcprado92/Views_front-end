import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./Components/Nav";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
// import MapP from "./Pages/MapP";
import Show from "./Pages/Show";
import Footer from "./Components/Footer";
import "./styles/stylin.css"


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home />} />
        {/* <Route path="/map" element={ <MapP /> } /> */}
        <Route path="/pics" element={ < Index />} />
        <Route path="/pics/:id" element={ <Show />} />
        <Route path="/pics/new" element={<New/> } />
        <Route path="/pics/:id/edit" element={<Edit />} />
        <Route path="*" element={ <FourOFour />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  );
}


export default App;
