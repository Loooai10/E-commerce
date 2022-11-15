import React, { Component } from 'react'
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Account from './components/Account/Account'
import Blog from './components/Blog/Blog'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      //Java Logic here
      <>
        {/* //html logic here */}
        <Router>
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/About">About</Link>&nbsp;
            <Link to="/Contact">Contact us</Link>&nbsp;
            <Link to="/Blog">Blog</Link>&nbsp;
            <Link to="/Shop">Shop</Link>&nbsp;
            <Link to="/Cart">Cart</Link>&nbsp;
            <Link to="/Account">Account</Link>&nbsp;
          </nav>
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}