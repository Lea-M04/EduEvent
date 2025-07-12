import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

function Footer() {
  return (
    <footer className="text-white text-center text-lg-start w-100 mt-5" style={{ backgroundColor: '#23242a' }}>
      <div className="container p-4">
        <div className="row mt-4">
          {/* Column 1 */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About EduEvent</h5>
            <p>
              EduEvent is a platform designed to help students and professionals discover
              educational events, workshops, hackathons, and training programs based on their interests.
            </p>
            <p>
              Our mission is to empower communities through access to knowledge-sharing opportunities
              and meaningful networking across different fields in tech, science, and education.
            </p>
            <div className="mt-4">
              <a className="btn btn-warning btn-lg rounded-circle me-2"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-warning btn-lg rounded-circle me-2"><i className="fab fa-dribbble"></i></a>
              <a className="btn btn-warning btn-lg rounded-circle me-2"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-warning btn-lg rounded-circle"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1">Contact Us</h5>
            <div className="form-outline form-white mb-4">
              <input
                type="text"
                id="formControlLg"
                className="form-control form-control-lg"
                placeholder="Search..."
              />
            </div>
            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-home"></i></span>
                <span className="ms-2">Pristina, Kosovo</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-envelope"></i></span>
                <span className="ms-2">contact@eduevent.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-phone"></i></span>
                <span className="ms-2">+383 45 123 456</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-globe"></i></span>
                <span className="ms-2">www.eduevent.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} EduEvent. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
