import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { customUseSelector, StoreDispatch } from "../../types";
import { fetchUsers } from "./user-slice";

export const UserView = () => {
  const user = customUseSelector((state) => state.user); //important

  const dispatch = useDispatch<StoreDispatch>();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {user.loading && <strong>Loading...</strong>}
      {!user.loading && user.error ? <strong>{user.error}</strong> : null}
      {!user.loading && user.users.length
        ? user.users.map((user: any) => (
            <p key={user.id}>
              <strong>{user.name}</strong>
            </p>
          ))
        : null}
      <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
    </div>
  );
};
