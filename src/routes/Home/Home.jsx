import UserButton from "../../components/UserButton/UserButton";
import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const { users } = useLoaderData();

    return (
      <div className="home">
        <nav>
          {users.length ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <Link to={`/dashboard/${user.id}`}>
                    {user.fullName !== undefined ? (
                      <UserButton fullName={user.fullName} />
                    ) : (
                      <>
                        <UserButton fullName={"unknown user"} />
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No User...</i>
            </p>
          )}
        </nav>
      </div>
    );
}
