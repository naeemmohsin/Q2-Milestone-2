
import Link from "next/link";
import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import cssStyle from "./components/footer.module.css";
// import cssStyle from "./components/header.module.css";
// console.log(cssStyle,"CSS-Style");
// console.log(cssStyleF);
const Navbar =()=>{
    return(
    <body>
    <div>
    <Header/>
    <nav className="bg-emerald-400" >
    <Link href="/about">  <button className="p-2 w-[100px] bg-slate-100 border-rose-400 border-2 rounded-[50px]">About</button></Link> 
    <Link href="/Contact"><button className="p-2 w-[100px] bg-slate-100 border-rose-400 border-2 rounded-[50px]">Contact</button></Link>
    <Link href="/Service"><button className="p-2 w-[100px] bg-slate-100 border-rose-400 border-2 rounded-[50px]">Services</button></Link>
    </nav>
        <Hero/>
        <Footer/>
        </div>
    </body>
    );
}
export default Navbar;
