import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container-my">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link
                activeclassname="active"
                to="showcase"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeclassname="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeclassname="active"
                to="food-menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                activeclassname="active"
                to="food"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                activeclassname="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                activeclassname="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <h1 className="logo">RS</h1>
        </div>
      </nav>
      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home">
            Eat Right Food
          </h1>
          <p>Eat Healty, it is good for our health.</p>
          <Link
            activeclassname="active"
            to="food-menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary"
          >
            Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Header;
