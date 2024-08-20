import "./closeFriend.css";
const PF = "http://localhost:5173/assets/"

function CloseFriend({user}) {
  return (
      <li className="sidebarFriend">
        <img
          src={PF+user.profilePicture}
          alt="friendPic"
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
  );
}

export default CloseFriend;
