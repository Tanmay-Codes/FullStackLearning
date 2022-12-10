import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Footer from "./components/Footer";
import Missing from "./components/Missing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostItem from "./components/PostItem";
import NewPost from "./components/NewPost";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/*" element={<Posts />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
