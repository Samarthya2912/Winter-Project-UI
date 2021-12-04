import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const resData = await response.json();
        console.log(resData);
        setIsLoading(false);
        if (response.ok) {
          setLoadedUsers(resData.users);
        } else {
          throw new Error(resData.message);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="center column">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="center column">
        <h1>{errorMessage}</h1>
      </div>
    );
  }

  return (
    <div className="flex center">
      <UserList users={loadedUsers} />
    </div>
  );
};

export default Users;
