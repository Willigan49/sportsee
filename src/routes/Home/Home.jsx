import UserButton from "../../components/UserButton/UserButton";
import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const { users } = useLoaderData();

  return (
    <div className="home">
      {console.log(users)}
      {
        <ul>
          <li key={users.id}>
            <Link to={`/dashboard/${users.id}`}>
              {users.firstName || users.lastName ? (
                <>
                  <UserButton
                    firstName={users.firstName}
                    lastName={users.lastName}
                  />
                </>
              ) : (
                <p>No name</p>
              )}
            </Link>
          </li>
        </ul>
      }
    </div>
  );
}
