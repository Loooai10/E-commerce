import React, { Component } from 'react'
import './Blog.css'
export default class App extends Component {
  render() {
    return (
      <>

        <h1>Products </h1>
        <section id='header'>
          <a href="#"><img src="public/logo.png" class='logo' alt="" /></a>
          <div>

          </div>
        </section>

        <section id='prodetails' class='section-p1'>
          <div class='single-pro-image'>
            <img src="/public/f1.jpg" width="100%" id='MainImg' alt="" />
            <div class='small-img-group'>
              <div class='small-img-col'>
                <img src="public/f2.jpg" width="100%" class='small-img' alt="" />
              </div>
              <div class='small-img-col'>
                <img src="public/f3.jpg" width="100%" class='small-img' alt="" />
              </div>
              <div class='small-img-col'>
                <img src="public/f4.jpg" width="100%" class='small-img' alt="" />
              </div>
              <div class='small-img-col'>
                <img src="public/f5.jpg" width="100%" class='small-img' alt="" />
              </div>
            </div>
          </div>
          <div class='single-pro-details'>
            <h6>Home / T-Shirt</h6>
            <h4>Men's Fashion T Shirt</h4>
            <h2>34BHD</h2>
            <select name="" id="">
              <option value="">Select Size</option>
              <option value="">XL</option>
              <option value="">XXL</option>
              <option value="">Small</option>
              <option value="">Large</option>
            </select>
            <input type="number" value="1" />
            <button class='normal'>Add To Cart</button>
            <h4>Product Details</h4>
            <span>
              The heck going on here man
            </span>
          </div>
        </section>

        <section id='product1' class="section-1">
          <h2>Featured Products</h2>
          <p>Summer collection new Modern design</p>
          <div class='pro-container'>
            <div class='pro'>
              <img src="/img/pic1" alt="" />
              <div class='des'>
                <span>adidas</span>
                <h5>Cartoon astronaut T-shirts</h5>
                <div class='star'>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                </div>
                <h4>74BHD</h4>
              </div>
              <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
            </div>
            <div class='pro'>
              <img src="/img/pic1" alt="" />
              <div class='des'>
                <span>adidas</span>
                <h5>Cartoon astronaut T-shirts</h5>
                <div class='star'>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                </div>
                <h4>74BHD</h4>
              </div>
              <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
            </div>
            <div class='pro'>
              <img src="/img/pic1" alt="" />
              <div class='des'>
                <span>adidas</span>
                <h5>Cartoon astronaut T-shirts</h5>
                <div class='star'>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                </div>
                <h4>74BHD</h4>
              </div>
              <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
            </div>
            <div class='pro'>
              <img src="/img/pic1" alt="" />
              <div class='des'>
                <span>adidas</span>
                <h5>Cartoon astronaut T-shirts</h5>
                <div class='star'>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                </div>
                <h4>74BHD</h4>
              </div>
              <a href="#"><i class='fal fa-shopping-cart cart'></i></a>
            </div>
          </div>
        </section>

        <section id='newsletter' class='section-p1 section-m1'>
          <div class='newstext'>
            <h4>Sign up for Newsletter</h4>
            <p>Get E-mail updates about our latest special offers</p>
          </div>
          <div class='form'>
            <input type="text" placeholder='Your email address' />
            <button class='normal'>Sign Up</button>
          </div>
        </section>

        <footer class='section-p1'>
          <div class='col'>
            <img class='logo' src="" alt="" />
            <h4>Contact</h4>
            <p><strong>Address: </strong>562 Riffa Al-hunaniyah</p>
            <p><strong>Phone: </strong>+973-34569823</p>
            <p><strong>Hours: </strong>10:00am - 18:00pm, Mon-sat</p>
            <div class='follow'>
              <h4>Follow us</h4>
              <div class='icon'>
                <i class='fab fa-facebook-f'>fbook</i>
                <i class='fab fa-facebook-f'>Insta</i>
                <i class='fab fa-facebook-f'>Twit</i>
                <i class='fab fa-facebook-f'>Ytube</i>
              </div>
            </div>
          </div>

          <div class='col'>
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Privacy</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Contact us</a>
          </div>

          <div class='col'>
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
          </div>

          <div class='col install'>
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class='row'>
              <img src="public/f1.jpg" alt="" />
              <img src="public/f1.jpg" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="public/f2.png" alt="" />
          </div>

          <div class='copyright'>
            <p>c 2021, Tech2 etc - Ibti</p>
          </div>
        </footer>

        {/* <script>
          const MainImg = document.getElementById("MainImg");
          const smallimg = document.getElementByClassName("small-img");

          smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src
          }
          smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src
          }
          smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src
          }
          smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src
          }
        </script> */}

      </>
    )
  }
}