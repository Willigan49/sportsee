import UserButton from "../../components/UserButton/UserButton";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home">
      <nav>
        <ul>
          <li>
            <Link to={`/dashboard/12`}>
              <UserButton fullName={"Karl Dovineau"} />
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/18`}>
              <UserButton fullName={"Cecilia Ratorez"} />
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/10`}>
              <UserButton fullName={"Mock"} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
