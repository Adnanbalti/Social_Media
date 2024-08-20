import "./online.css";
const PF = "http://localhost:5173/assets/"

function Online({user}) {
  return (
    <> 
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={PF+user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </>
  );
}

export default Online;
