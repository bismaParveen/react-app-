import React from "react";

const Users = (props) => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          {props.userList.map(({ imageUrl, title, desc }, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img src={imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="/" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
