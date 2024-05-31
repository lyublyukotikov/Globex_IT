import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home.jsx";
import AppContext from "./context";
import React from "react";
import axios from "axios";

function App() {
  // храним юзеров
  const [users, setUsers] = React.useState([]);
  // храним состояние загрузки
  const [isLoading, setIsLoading] = React.useState(true);
  // храним состояние юзеров которых мы нашли
  const [searchUsers, setSearchUser] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  // Функция для изменения значения поиска
  const onChangeSearchInput = (value) => {
    setSearchValue(value);

    if (value) {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchUser(filteredUsers);
    } else {
      setSearchUser([]);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const usersResponse = await axios.get("https://6659bbebde346625136db5e1.mockapi.io/users");
      console.log(usersResponse);
      setIsLoading(false);
      setUsers(usersResponse.data);
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ users, searchUsers, onChangeSearchInput, searchValue, isLoading }}
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
