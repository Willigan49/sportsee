import UserButton from "../../components/UserButton/UserButton";
import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const { users } = useLoaderData();
  return (
    <div className="home">
      {users.length ? (
        <ul>
          {users.map((user) => console.log(user) /* (
            <li key={user.id}>
              <Link to={`/dashboard/${user.id}`}>
                {user.firstName || user.lastName ? (
                  <>
                    <UserButton
                      firstName={user.firstName}
                      lastName={user.lastName}
                    />
                  </>
                ) : (
                  <p>No name</p>
                )}
              </Link>
            </li>
          ) */)}
        </ul>
      ) : (
        <p>No user</p>
      )}
    </div>
  );
}
