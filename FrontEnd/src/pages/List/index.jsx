import { useEffect, useState } from "react";
import api from "../../services/api.js";
import "./list.css";

function List() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token");

      try {
        const response = await api.get("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAllUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadUsers();
  }, []);

  useEffect(() => {
    console.log("Dados de usuários:", allUsers);
  }, [allUsers]);

  return (
    <div className="flex">
      <div className="container">
        <h2 className="title">User List</h2>
        <ul className="usersContainer">
          {allUsers.length > 0 ? (
            allUsers.map((user) => (
              <li key={user.id} className="userContainer">
                <p>
                  <span>Id: </span> {user.id}
                </p>
                <p>
                  <span>Name: </span>
                  {user.name}
                </p>
                <p>
                  <span>Email:</span> {user.email}
                </p>
                <p className="item">
                  <span>Hashed Password: </span> {user.password}
                </p>
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default List;
