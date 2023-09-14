import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Preloader />
      <Header darkMode={darkMode} setDarkMode = {setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 duration-700 dark:text-white p-10">
      <Router>
        <Routes>
          <Route path="#Hello" element={Hero}></Route>
          <Route path="#About" element={About}></Route>
          <Route path="#Skills" element={Services}></Route>
          <Route path="#Port" element={Portofolio}></Route>
          <Route path="#Contact" element={Contact}></Route>
        </Routes>
      </Router>
<Hero />
<About />
<Services />
<Portofolio />
{/* <Testimonials /> */}
<Contact />
<Footer/>

      </main>
    </div>
  );
}

export default App;
