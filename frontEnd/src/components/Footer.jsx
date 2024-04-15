import React, { useState } from "react";

function Footer() {
  const [showContactCard, setShowContactCard] = useState(false);

  const toggleContactCard = () => {
    setShowContactCard(!showContactCard);
  };

  return (
    <>
      <hr></hr>
      <div className='"shadow-2xl'>
        <footer className="footer footer-center p-10  text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover" onClick={toggleContactCard}>
              Contact
            </a>
            <a className="link link-hover">Jobs</a>
            {/* <a className="link link-hover">Press kit</a> */}
          </nav>
            {showContactCard && (
            <div className="card bg-base-100 shadow-xl p-4">
              <div className="card-body">
                <p>Email: kumarirachna740@gmail.com</p>
                <p>Phone: 9711627163</p>
              </div>
            </div>
          )}
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.linkedin.com/in/rachna-ab7b53275/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.721-1.5-1.5s.534-1.5 1.5-1.5 1.5 .721 1.5 1.5-.534 1.5-1.5 1.5zm13.5 11.5h-3v-5.5c0-1.305-.021-2.5-1.531-2.5-1.512 0-1.744 1.191-1.744 2.5v5.5h-3v-10h3v1.639c.411-.739 1.453-1.639 2.987-1.639 3.034 0 3.757 2.003 3.757 4.611v5.389z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.032.138 4.462 1.644 4.601 4.601.058 1.266.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.139 2.958-1.569 4.463-4.601 4.601-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.032-.138-4.462-1.643-4.601-4.601-.058-1.266-.07-1.647-.07-4.85s.012-3.584.07-4.85c.139-2.957 1.569-4.463 4.601-4.601 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.013 7.051.072 3.672.212 1.791 2.114 1.651 5.494c-.061 1.281-.072 1.69-.072 5.506s.011 4.225.072 5.506c.14 3.38 2.021 5.282 5.4 5.422 1.281.059 1.69.072 5.949.072s4.668-.013 5.949-.072c3.379-.14 5.26-2.042 5.4-5.422.061-1.281.072-1.69.072-5.506s-.011-4.225-.072-5.506c-.14-3.38-2.021-5.282-5.4-5.422-1.281-.059-1.69-.072-5.949-.072zm0 5.838c3.398 0 6.162 2.764 6.162 6.162s-2.764 6.162-6.162 6.162-6.162-2.764-6.162-6.162 2.764-6.162 6.162-6.162zm0 1.5a4.662 4.662 0 1 0 0 9.324 4.662 4.662 0 0 0 0-9.324zm6.186-1.5a1.686 1.686 0 1 0 0 3.372 1.686 1.686 0 0 0 0-3.372z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Footer;
