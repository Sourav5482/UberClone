import React from "react";
import "./index.css"
import Header from "./Components/Header";
import Page1 from "./Components/page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <div>
       <Header/>
       <Page1/>
       <Page2/>
       <Page3/>
       <Page4 />
       <Page5/>
       <Footer/>
        </div>
    );
};
export default App;