import React, { Suspense, useState } from "react";
import "./User.css";
import { Link } from "react-router";
import Details2 from "../Details2/Details2";
import { Navigate } from "react-router";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);

  const { id, name, phone, email } = user;
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  const dataPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  if (visitHome) {
    return <Navigate to='/'></Navigate>;
  }

  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>Phone: {phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show More</Link>
      <button onClick={handleInfo}>{showInfo ? "Hide" : "Show"} info</button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <Details2 dataPromise={dataPromise}></Details2>
        </Suspense>
      )}
      <button onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
