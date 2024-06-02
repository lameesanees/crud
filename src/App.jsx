import "./App.css";
import AllRest from "./Components/AllRest";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom"
import ViewRest from "./Components/ViewRest";
import AddRest from "./Components/AddRest";
import EditRest from "./Components/EditRest";
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<AllRest />} />
      <Route path="/view/:id" element={<ViewRest />} />
      <Route path="/add" element={<AddRest />} />
      <Route path="/edit/:id" element={<EditRest />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
