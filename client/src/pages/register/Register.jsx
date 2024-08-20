import "./register.css";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Baltisocial</h3>
            <span className="loginDesc">
              Connect with friends and the world arround you on Baltisocial
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Username" type="text" className="loginInput" />
              <input placeholder="Email" type="Email" className="loginInput" />
              <input placeholder="Password" type="Password" className="loginInput" />
              <input
                placeholder="Password Again"
                type="Password"
                className="loginInput"
              />
              <button className="loginButton">Sign up</button>
              <button className="loginRegisterButton">
                Login to Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
