import userIcon from "../../assets/icons/user.svg";

export default function UserButton({ fullName }) {

  return (
    <div className="user-button">
      <img src={userIcon} alt="user icon" />
      <p>{fullName}</p>
    </div>
  );
}
