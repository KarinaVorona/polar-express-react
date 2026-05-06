import './App.css';

import logo from './assets/logo.svg';
import glass from './assets/glass.svg';
import usaFlag from './assets/usa_flag.svg';
import figure from './assets/figure.svg';
import box from './assets/box.svg';
import price from './assets/price.svg';
import parcel from './assets/parcel.svg';
import store from './assets/store.svg';
import facebook from './assets/facebook.svg';
import youtube from './assets/youtube.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';

function App() {
  return (
    <>
      <header className="header container">
        <h1>
          <img src={logo} alt="Polar Express logo" />
        </h1>

        <nav className="nav">
          <ul className="menu menu__links">
            <li><a href="#">Tracking</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Services</a></li>
          </ul>

          <ul className="menu menu__icons">
            <li><img src={glass} alt="Search" /></li>
            <li><img src={usaFlag} alt="USA flag" /></li>
            <li><img src={figure} alt="Profile" /></li>
          </ul>
        </nav>
      </header>

      <main className="main_container">
        <section className="hero container">
          <div className="hero__left">
            <div className="hero__search">
              <input type="text" placeholder="Tracking ID: 084347XZ" />
              <button>Track</button>
            </div>

            <h2 className="hero__title">
              Choose your perfect<br />delivery price
            </h2>
          </div>

          <div className="hero__right">
            <img src={box} alt="Boxes" />
          </div>
        </section>

        <section className="hero__actions_center container">
          <div className="action">
            <img src={price} alt="Get Price" />
          </div>

          <div className="action">
            <img src={parcel} alt="Send Parcel" />
          </div>

          <div className="action">
            <img src={store} alt="Find a Store" />
          </div>
        </section>

        <section className="info container">
          <h3>Manage your holiday shipping from anywhere</h3>

          <div className="info__cards">
            <div className="card">
              <h4>Keep holiday surprises secure</h4>
              <p>
                The chilly weather is setting in here in the northern hemisphere,
                and as we get ready for the holidays many of us are gathering
                round a cheery fire.
              </p>
              <button>DISCOVER MORE</button>
            </div>

            <div className="card">
              <h4>Supporting small businesses</h4>
              <p>
                Our Small Business Hub provides you with information and insights
                needed to help you adapt and keep your business moving.
              </p>
              <button>GO TO SMALL BUSINESS HUB</button>
            </div>

            <div className="card">
              <h4>Latest news</h4>
              <p>
                Get the latest news, including articles on innovation, special
                announcements and more.
              </p>
              <button>GO TO NEWSROOM</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Claims Support</a></li>
          </ul>

          <p className="follow">Follow PolarExpress</p>

          <div className="social">
            <img src={facebook} alt="Facebook" />
            <img src={youtube} alt="YouTube" />
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        <div>
          <h4>This Site</h4>
          <ul>
            <li><a href="#">Tracking</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div>
          <h4>Company Info</h4>
          <ul>
            <li><a href="#">About PE</a></li>
            <li><a href="#">Media Relations</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;