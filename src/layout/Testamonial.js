import React from "react";

function Testamonial(props) {
  return (
    <div>
      <section id="testimonials">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-container container">
          <div className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img
                  src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg"
                  alt=""
                />
                <p className="customer-name">Ross Lee</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              voluptas cupiditate aspernatur odit doloribus non.
            </p>
          </div>
          <div className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img
                  src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                  alt=""
                />
                <p className="customer-name">Amelia Watson</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              voluptas cupiditate aspernatur odit doloribus non.
            </p>
          </div>
          <div className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img
                  src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg"
                  alt=""
                />
                <p className="customer-name">Ben Roy</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              voluptas cupiditate aspernatur odit doloribus non.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testamonial;
