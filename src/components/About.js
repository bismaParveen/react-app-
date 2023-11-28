import React, { useState } from "react";

const About = () => {
  const [color, setColor] = useState(false);

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*7BXoWsF5uTJR-jjCc3xd9w.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.shutterstock.com/image-photo/young-beautiful-girl-preparing-exams-260nw-622036163.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`btn btn-${color ? "danger" : "primary"} mt-3`}
        onClick={() => {
          setColor(!color);
        }}
      >
        Favourite Color
      </button>
    </div>
  );
};

export default About;
