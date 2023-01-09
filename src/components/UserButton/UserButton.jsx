import userIcon from "../../assets/icons/user.svg";

export default function UserButton({ firstName, lastName }) {
  const userFullName = `${firstName} ${lastName}`;

  return (
    <div className="user-button">
      <img src={userIcon} alt="user icon" />
      <p>{userFullName}</p>
    </div>
  );
}
