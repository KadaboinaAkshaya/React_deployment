import React from 'react';
import Navbar1 from './Navbar1';
import TopNavbar from './Top-navbar';
import Navbar from './Navbar';
import Image from './image';
import Banner from './Banner';
import Category from './Category';

class Header extends React.Component{
    render(){
        return <header>
            <Navbar1/>
            <TopNavbar/>
            <Navbar/>
            <Image/>
            <Banner/>
            <Category/>
        </header>
    }
}
export default Header;