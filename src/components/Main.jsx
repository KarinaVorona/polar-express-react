import clsx from 'clsx';

import box from '../assets/box.svg';
import price from '../assets/price.svg';
import parcel from '../assets/parcel.svg';
import store from '../assets/store.svg';

function Main() {
  return (
    <main className={clsx('main_container')}>
      <section className={clsx('hero', 'container')}>
        <div className={clsx('hero__left')}>
          <div className={clsx('hero__search')}>
            <input type="text" placeholder="Tracking ID: 084347XZ" />
            <button>Track</button>
          </div>

          <h2 className={clsx('hero__title')}>
            Choose your perfect
            <br />
            delivery price
          </h2>
        </div>

        <div className={clsx('hero__right')}>
          <img src={box} alt="Boxes" />
        </div>
      </section>

      <section className={clsx('hero__actions_center', 'container')}>
        <div className={clsx('action')}>
          <img src={price} alt="Get Price" />
        </div>

        <div className={clsx('action')}>
          <img src={parcel} alt="Send Parcel" />
        </div>

        <div className={clsx('action')}>
          <img src={store} alt="Find a Store" />
        </div>
      </section>

      <section className={clsx('info', 'container')}>
        <h3>Manage your holiday shipping from anywhere</h3>

        <div className={clsx('info__cards')}>
          <div className={clsx('card')}>
            <h4>Keep holiday surprises secure</h4>

            <p>
              The chilly weather is setting in here in the northern hemisphere,
              and as we get ready for the holidays many of us are gathering
              round a cheery fire.
            </p>

            <button>DISCOVER MORE</button>
          </div>

          <div className={clsx('card')}>
            <h4>Supporting small businesses</h4>

            <p>
              Our Small Business Hub provides you with information and insights
              needed to help you adapt and keep your business moving.
            </p>

            <button>GO TO SMALL BUSINESS HUB</button>
          </div>

          <div className={clsx('card')}>
            <h4>Latest news</h4>

            <p>
              Get the latest news, including articles on innovation,
              special announcements and more.
            </p>

            <button>GO TO NEWSROOM</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;