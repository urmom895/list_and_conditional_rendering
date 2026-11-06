import { useState, useEffect } from "react";
import "../styles/UserProfile.css";

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not load user");
        }

        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="user-profile">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Could not load user</p>
      ) : (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>City: {user.address.city}</p>
        </div>
      )}

      <button onClick={() => setUserId(userId === 10 ? 1 : userId + 1)}>
        Next user
      </button>

      <button onClick={() => setUserId(userId === 1 ? 10 : userId - 1)}>
        Previous user
      </button>
    </div>
  );
}

export default UserProfile;