import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center bg-dark text-white">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Made by
              <a
                href="https://github.com/Prabhat565"
                className="text-decoration-underline text-white fs-5"
                target="_blank"
                rel="noreferrer"
              >
                Prabhat Sharma
              </a>
            </p>
            <a
              className="text-white fs-4"
              href="https://github.com/Prabhat565"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
