import React from "react";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="container">
        <div className="row footer">
          <div className="col col-lg-3 col-md-6 col-sm-10 footer-first">
            <img src="/img/main-logo.png" alt="" />
            <p>
              Gravida massa volutpat aenean odio. Amet, turpis erat nullam
              fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
              ac sit suscipit hendrerit.
            </p>
            <span>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-instagram"></i>
            </span>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-10 footer-second">
            <h3>Quick Links</h3>
            <a href="##">HOME</a>
            <a href="##">ABOUT</a>
            <a href="##">SERVICES</a>
            <a href="##">SINGLE ITEM</a>
            <a href="##">CONTACT</a>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-10 footer-third">
            <h3>HELP & INFO</h3>
            <a href="##">Track Your Order</a>
            <a href="##">Returns + Exchanges</a>
            <a href="##">Shipping + Delivery</a>
            <a href="##">Contact Us</a>
            <a href="##">Find Us Easy</a>
            <a href="##">Faqs</a>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-10 footer-fourth">
            <h3>CONTACT US</h3>
            <p>Do you have any questions or suggestions?</p>
            <a href="##">contact@yourcompany.com</a>
            <p>Do you need support? Give us a call.</p>
            <a href="##">+43 720 11 52 78</a>
          </div>
        </div>
      </footer>
      <hr />
      <div className="container">
        <div className="row footer-end">
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <span className="footer-icons">
                We Ship With : <img src="/img/arct-icon.png" alt="" />{" "}
                <img src="/img/dhl-logo.png" alt="" />
              </span>
              <span className="footer-icons">
                Payment Options : <img src="/img/visa-card.png" alt="" />
                <img src="/img/master-card.png" alt="" />
                <img src="/img/paypal-card.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <div className="row  website-rights">
                <span>© Copyright 2022 Kaira. All rights reserved</span>
                <span>Design by <name>Mohammad Aabis</name></span>
                
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
