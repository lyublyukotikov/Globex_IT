import React from "react";
import Search from "../components/header/Search.jsx";
import Cards from "../components/cards/Cards.jsx";
import Drawer from "../components/pop-up/Drawer.jsx";
import AppContext from "../context.js";
// компонент главной страницы получаем в качестве пропса наши товары значение для поиска значение для отображения того что нашли
// значение изменения input,функцию  onAddToFavorite добавления в favorite и функцию  onAddtoCurt добавление в карзину

const Home = () => {
  //храним состояние модального окна
  const [showModal, setShowModal] = React.useState(false);
  // храним состояние выбранного пользователя
  const [selectedUser, setSelectedUser] = React.useState(null);

  // функция закрытия модального окна при нажатии на крестик либо вне области экрана
  const closeModal = () => {
    setShowModal(false);
  };
  // функция для открытия модального окна
  const openDrawer = (user) => {
    setSelectedUser(user);
    setShowModal(!showModal);
  };

  return (
    <div className="main__page">
      <h2 className="visually-hidden">Globex_IT</h2>
      <Search />

      <Cards openDrawer={openDrawer} />

      {showModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Drawer closeModal={closeModal} user={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default Home;
