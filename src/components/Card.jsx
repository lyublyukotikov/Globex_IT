import React from "react";

const Card = ({ openDrawer, name, phone, email }) => {
  // функция для открытия модального окна
  const handleClick = () => {
    openDrawer();
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <div className="card__info">
          <ul className="card__info__list">
            <li className="card__info__item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 1H7C6.44775 1 6 1.44922 6 2V2.5H18V2C18 1.70312 17.8701 1.4375 17.6641 1.25391C17.4873 1.09375 17.2549 1 17 1ZM5 2.5V3.5V18.5V19.5V22C5 23.1055 5.89551 24 7 24H17C17.6602 24 18.2456 23.6797 18.6099 23.1875C18.855 22.8555 19 22.4453 19 22V19.5V18.5V3.5V3V2C19 0.894531 18.1045 0 17 0H7C6.5498 0 6.13428 0.148438 5.7998 0.398438C5.31396 0.761719 5 1.34375 5 2V2.5ZM6 3.5V18.5H18V3.5H6ZM6 22V19.5H18V22C18 22.5508 17.5522 23 17 23H7C6.69092 23 6.41455 22.8594 6.23145 22.6367C6.08691 22.4648 6 22.2422 6 22ZM13 21C13 21.5508 12.5522 22 12 22C11.4478 22 11 21.5508 11 21C11 20.4492 11.4478 20 12 20C12.5522 20 13 20.4492 13 21Z"
                  fill="#432EAB"
                />
              </svg>
              <span className="card__info__item">{phone}</span>
            </li>
            <li className="card__info__item">
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 2V12C23 12.5523 22.5523 13 22 13L2 13C1.44772 13 0.999999 12.5523 0.999999 12L1 2C1 1.89068 1.01754 1.78546 1.04996 1.687L10.4171 9.35103C11.338 10.1045 12.6624 10.1045 13.5833 9.35103L22.9501 1.68727C22.9825 1.78565 23 1.89078 23 2ZM22.1891 1.01786L12.9501 8.57707C12.3975 9.02916 11.6029 9.02916 11.0504 8.57707L1.81123 1.01779C1.87236 1.00611 1.93547 0.999999 2 0.999999L22 1C22.0647 1 22.1279 1.00614 22.1891 1.01786ZM22 0C23.1046 0 24 0.895431 24 2V12C24 13.1046 23.1046 14 22 14L2 14C0.895429 14 0 13.1046 0 12V2C0 0.895429 0.895432 0 2 0H22Z"
                  fill="#432EAB"
                />
              </svg>

              <span className="card__info__item">{email}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
