import React from "react";

export default function AppFooter() {
  return (
    <div className="container-fluid mt-5">
      <footer>
        <div className="row justify-content-center text-white">
          <div className="col-12 col-lg-4 py-4">
            <h4 className="text-start text-capitalize">
              Grace Community Church
            </h4>
            <div className="py-2">
              <p>
                A place where faith grows, hope thrives, and lives are
                transformed through God's grace.
              </p>
            </div>
            <div className="text-start">
              <i className="bi bi-geo-alt"></i>
              <span className="px-2">
                123 Faith Street, Hope City, HC 12345
              </span>
            </div>
            <div className="text-start">
              <i className="bi bi-telephone"></i>
              <span className="px-2">(555) 123-HOPE</span>
            </div>
            <div>
              <i className="bi bi-envelope"></i>
              <span className="px-2">info@gracecommunity.org</span>
            </div>
          </div>
          <div className="col-12 col-lg-2 py-4">
            <h5 className="text-capitalize">Quick links</h5>
            <div className="text-start">
              <ul className="footer-ul">
                <li className="footer-li">
                  <a href="#about" className="footer-a">
                    About Us
                  </a>
                </li>
                <li className="footer-li">
                  <a href="#services" className="footer-a">
                    Services
                  </a>
                </li>
                <li className="footer-li">
                  <a href="#events" className="footer-a">
                    Events
                  </a>
                </li>
                <li className="footer-li">
                  <a href="#contacts" className="footer-a">
                    Contacts
                  </a>
                </li>
                <li className="footer-li">
                  <a href="#contacts" className="footer-a">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 py-4">
            <h5 className="text-capitalize">Service times</h5>
            <div className="text-start">
              <div className="py-2">
                <span className="fw-bold">Sunday Worship</span>
                <br />
                <span>9:00 AM & 11:00 AM</span>
              </div>
              <div className="py-2">
                <span className="fw-bold">Bible Study</span>
                <br />
                <span>Wednesdays 7:00 PM</span>
              </div>
              <div className="py-2">
                <span className="fw-bold">Youth Group</span>
                <br />
                <span>Fridays 7:00 PM</span>
              </div>
              <div className="py-2">
                <span className="fw-bold">Office Hours</span>
                <br />
                <span>Mon-Fri 9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-4">
            <h5 className="text-capitalize">Connect with us</h5>
            <div className="text-start">
              <p>Stay connected and be part of our community online.</p>
              <div className="my-3">
                <a href="https://www.facebook.com" className="text-center text-white">
                  <i className="bi bi-facebook p-2"></i>
                </a>
                <a href="https://www.instagram.com" className="text-center text-white">
                  <i className="bi bi-instagram p-2"></i>
                </a>
                <a href="https://www.youtube.com" className="text-center text-white">
                  <i className="bi bi-youtube p-2"></i>
                </a>
              </div>
              <span className="fw-bold my-3">Subscribe to our newsletter</span>
              <br />
              <span>Get weekly updates about events and announcements.</span>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="text-center py-3">
          <p className="text-white">
            © {new Date().getFullYear()} Grace Community Church. All rights
            reserved. (~By Mohaa Da Dev)
          </p>
        </div>
      </footer>
    </div>
  );
}
