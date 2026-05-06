import clsx from 'clsx';

import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

function Footer() {
  return (
    <footer className={clsx('footer')}>
      <div>
        <h4>Customer Service</h4>

        <ul>
          <li><a href="#">Help center</a></li>
          <li><a href="#">Claims Support</a></li>
        </ul>

        <p className={clsx('follow')}>
          Follow PolarExpress
        </p>

        <div className={clsx('social')}>
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
  );
}

export default Footer;