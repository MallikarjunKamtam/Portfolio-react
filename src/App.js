import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Profile from "./Components/Profile/Profile";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import MenuItems from "./Components/menu-items/MenuItems";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="menuList" element={<MenuItems />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="work" element={<Work />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="pagenotfound" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
