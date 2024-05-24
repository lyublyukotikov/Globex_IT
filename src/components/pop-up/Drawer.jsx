import React, { useRef, useEffect } from "react";

const Drawer = ({ closeModal, user }) => {
  const drawerRef = useRef(null);

  const handleCloseModal = () => {
    closeModal();
  };

  const handleOutsideClick = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="drawer" ref={drawerRef}>
      <div className="drawer__inner">
        <h2 className="visually-hidden">Info</h2>
        <div className="drawer__title">
          {user.name}
          <button className="close_button" onClick={handleCloseModal}>
            <span className="visually-hidden">Close navigation menu</span>
          </button>
        </div>
        <div className="drawer__info">
          <table className="drawer__info__list">
            <tbody>
              <tr className="drawer__info__item">
                <td>Телефон:</td>
                <td>
                  <span className="alt__color">{user.phone}</span>
                </td>
              </tr>
              <tr className="drawer__info__item">
                <td>Почта:</td>
                <td>
                  <span className="alt__color">{user.email}</span>
                </td>
              </tr>
              <tr className="drawer__info__item">
                <td>Дата приема:</td>
                <td>
                  <span className="alt__color">{user.hire_date}</span>
                </td>
              </tr>
              <tr className="drawer__info__item">
                <td>Должность:</td>
                <td>
                  <span className="alt__color">{user.position_name}</span>
                </td>
              </tr>
              <tr className="drawer__info__item">
                <td>Подразделение:</td>
                <td>
                  <span className="alt__color">{user.department}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="drawer__description">
          <h2 className="drawer__description__title">
            Дополнительная информация:
          </h2>
          <span className="drawer__description__info">{user.address}</span>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
