import Image from "next/image";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Movies from "./components/body";


const home = () => {
    return (
      <div>

        <Navbar/>
        <Header/>
        <Movies/>
        <Footer/>

      </div>


    
    )
  }
  
  export default home
