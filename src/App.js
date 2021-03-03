import React from "react";
import logo from "./img/logo.png";

import hotel_1 from "./img/hotel-1.jpg";
import hotel_2 from "./img/hotel-2.jpg";
import hotel_3 from "./img/hotel-3.jpg";
import user_1 from "./img/user-1.jpg";
import user_2 from "./img/user-2.jpg";
import user_3 from "./img/user-3.jpg";
import user_4 from "./img/user-4.jpg";
import user_5 from "./img/user-5.jpg";
import user_6 from "./img/user-6.jpg";

// import individual SVG as react component
import { ReactComponent as IconMagnifyingGlass } from "./img/SVG/magnifying-glass.svg";
import { ReactComponent as IconBookMark } from "./img/SVG/bookmark.svg";
import { ReactComponent as ChatIcon } from "./img/SVG/chat.svg";

// import sprite and use as svg / use tag see example at sidebar icons
import sprite from "./img/sprite.svg";

import userPhoto from "./img/user.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search hotels"
            />
            <button className="search__button">
              <IconMagnifyingGlass className="search__icon" />
            </button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <IconBookMark className="user-nav__icon" />
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <ChatIcon className="user-nav__icon" />
              <span className="user-nav__notification">13</span>
            </div>

            <div className="user-nav__user">
              <img
                src={userPhoto}
                className="user-nav__user--photo"
                alt="user-photo"
              />
              <span className="user-nav__user--username">Jonas</span>
            </div>
          </nav>
        </header>
        <div className="content">
          <nav className="sidebar">
            <ul className="sidebar__nav">
              <li className="sidebar__item sidebar__item--active">
                <a href="#" className="sidebar__link">
                  <svg className="sidebar__icon">
                    <use href={sprite + "#icon-home"} />
                  </svg>
                  <span>hotel</span>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#" className="sidebar__link">
                  <svg className="sidebar__icon">
                    <use href={sprite + "#icon-aircraft-take-off"} />
                  </svg>
                  <span>flight</span>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#" className="sidebar__link">
                  <svg className="sidebar__icon">
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <span>car rental</span>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#" className="sidebar__link">
                  <svg className="sidebar__icon">
                    <use href={sprite + "#icon-map"} />
                  </svg>
                  <span>tours</span>
                </a>
              </li>
            </ul>

            <div className="legal">&copy; 2021 Thana allrights reserved</div>
          </nav>
          <main className="hotel-view">
            <div className="gallery">
              <div className="gallery__item">
                <img
                  src={hotel_1}
                  alt="hotel-picture"
                  className="gallery__photo"
                />
              </div>
              <div className="gallery__item">
                <img
                  src={hotel_2}
                  alt="hotel-picture"
                  className="gallery__photo"
                />
              </div>
              <div className="gallery__item">
                <img
                  src={hotel_3}
                  alt="hotel-picture"
                  className="gallery__photo"
                />
              </div>
            </div>
            <div className="overview">
              <h1 className="overview__heading">hotel las palmas</h1>
              <div className="overview__stars">
                <svg className="overview__star-icon">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__star-icon">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__star-icon">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__star-icon">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__star-icon">
                  <use href={sprite + "#icon-star"} />
                </svg>
              </div>
              <div className="overview__location">
                <button className="btn-inline">albufeira, portugal</button>
                <svg className="overview__location-icon">
                  <use href={sprite + "#icon-location-pin"} />
                </svg>
              </div>

              <div className="overview__rating">
                <div className="overview__rating--average">8.6</div>
                <div className="overview__rating--count">423 votes</div>
              </div>
            </div>

            <div className="details">
              <div className="description">
                <p className="paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quos reiciendis adipisci fugiat ab totam placeat!
                  Beatae quos ex qui ipsam id animi magnam voluptatibus ducimus
                  debitis? Quo, praesentium voluptatum.
                </p>

                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, quibusdam odit? Nemo quas et cumque dignissimos
                  sapiente eum hic quae.
                </p>

                <ul className="list">
                  <li className="list__item">Close to the beach</li>
                  <li className="list__item">Breakfast included</li>
                  <li className="list__item">Free airport shuttle</li>
                  <li className="list__item">Free wifi in all rooms</li>
                  <li className="list__item">Air conditioning and heating</li>
                  <li className="list__item">Pets allowed</li>
                  <li className="list__item">We speak all languages</li>
                  <li className="list__item">Perfect for families</li>
                </ul>
                <div className="recommend">
                  <div className="recommend__count">
                    Lucy and 3 others friends recommend this hotel.
                  </div>
                  <div className="recommend__friends">
                    <img src={user_1} className="recommend__photo" alt="" />
                    <img src={user_2} className="recommend__photo" alt="" />
                    <img src={user_3} className="recommend__photo" alt="" />
                    <img src={user_4} className="recommend__photo" alt="" />
                  </div>
                </div>
              </div>

              <div className="user-reviews">
                <figure className="review">
                  <blockquote className="review__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates aspernatur qui totam itaque voluptatum.
                  </blockquote>
                  <figcaption className="review__user">
                    <img src={user_5} alt="" className="review__user-photo" />
                    <div className="review__user-box">
                      <p className="review__user-name">nick smith</p>
                      <p className="review__user-date">Feb 23rd, 2018</p>
                    </div>
                    <div className="review__user-rating">7.8</div>
                  </figcaption>
                </figure>
                <figure className="review">
                  <blockquote className="review__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates aspernatur qui totam itaque voluptatum.
                  </blockquote>
                  <figcaption className="review__user">
                    <img src={user_6} alt="" className="review__user-photo" />
                    <div className="review__user-box">
                      <p className="review__user-name">mary thomas</p>
                      <p className="review__user-date">Sept 13th, 2018</p>
                    </div>
                    <div className="review__user-rating">9.3</div>
                  </figcaption>
                </figure>

                <button className="btn-inline">Show all <span>&rarr;</span></button>
              </div>
              </div>
              <div className="cta">
                <h2 className="cta__heading">
                  good news! we have 4 free rooms for your selected dates!
                </h2>
                <button className="btn">
                  <span className="btn__invisible">
                    book now!
                  </span>
                  <span className="btn__visible">
                    only 4 rooms left
                  </span>
                </button>
              </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
