import React from "react";
import Card from "../Card";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import ClearImg from "../../assets/search-clear-btn.svg";

const Cards = ({ openDrawer }) => {
  const { users, searchUsers, isLoading, searchValue, onChangeSearchInput } =
    React.useContext(AppContext);

  const renderLoaders = () =>
    Array.from({ length: 53 }).map((_, index) => (
      <ContentLoader
        key={index}
        speed={2}
        width={390}
        height={300}
        viewBox="0 0 390 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="23" y="0" rx="0" ry="0" width="357" height="314" />
      </ContentLoader>
    ));

  const handleClearSearch = () => {
    onChangeSearchInput("");
  };

  return (
    <section className="section container">
      <div className="section__body">
        {searchValue && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              className="card__title"
              style={{
                marginRight: "10px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              "{searchValue}"
              <img
                src={ClearImg}
                alt="Clear search"
                style={{ cursor: "pointer", height: "20px", width: "20px" }}
                onClick={handleClearSearch}
              />
              найдено:
            </div>
          </div>
        )}
        <div className="cards">
          <h2 className="visually-hidden">Card with info about people</h2>

          {isLoading || users.length === 0 ? (
            renderLoaders()
          ) : (
            <>
              {searchUsers.length > 0 ? (
                <div className="cards">
                  {searchUsers.map((user, index) => (
                    <Card
                      key={index}
                      openDrawer={() => openDrawer(user)}
                      {...user}
                    />
                  ))}
                </div>
              ) : searchValue ? (
                <h2 className="alt__color">Ничего не найдено</h2>
              ) : (
                <div className="cards">
                  {users.map((user, index) => (
                    <Card
                      key={index}
                      openDrawer={() => openDrawer(user)}
                      {...user}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cards;
