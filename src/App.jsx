import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AppContext from "./context";
import React from "react";
import axios from "axios";
function App() {
  //храним юзеров
  const [users, setUsers] = React.useState([]);
  // храним что нашел
  // хоаним состояние загрузки
  const [isLoading, setIsLoading] = React.useState(true);
  // храним состояние юзеров которых мы нашли
  const [searchUsers, setSearchUser] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  // Функция для изменения значения поиска
  const onChangeSearchInput = async (value) => {
    setIsLoading(true);
    setSearchValue(value);
    try {
      const searchResponse = await axios.get(`http://[::1]:3000?term=${value}`);
      setSearchUser(searchResponse.data); // Сохраняем полученные данные пользователя
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(searchUsers);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const usersResponse = await axios.get("http://[::1]:3000/");
      setIsLoading(false);
      setUsers(usersResponse.data);
    }
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{ users, searchUsers, onChangeSearchInput, searchValue }}
    >
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
