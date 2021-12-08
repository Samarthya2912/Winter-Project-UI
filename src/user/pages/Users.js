import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import useApiCall from "../../shared/hooks/api-call-hook";

const Users = () => {
  const [callState, sendRequest] = useApiCall(true);

  const { isLoading, errorMessage, data } = callState;

  useEffect(() => {
    (async function() {
      try {
        await sendRequest("http://localhost:5000/api/users");
      } catch(err) {}
    })()
  }, [sendRequest])

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
        <h1>{"Error: " + errorMessage}</h1>
      </div>
    );
  }


  return (
    <div className="flex center">
      <UserList users={data.users} />
    </div>
  );
};

export default Users;
