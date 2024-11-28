import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import PageForAbout from "./Page/PageForAbout";
import Layout from "./Layout/Layout";
import PageForCarrer from "./Page/PageForCarrer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/about" element={<PageForAbout />} />
          <Route path="/carrer" element={<PageForCarrer />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
