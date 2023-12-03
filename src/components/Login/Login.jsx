import "./Login.css";
import reactflix from "../../assets/reactflix.png";
import { useAuth } from "../../core/auth/hooks/use_auth";

function Login() {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // FORMA COMUN 
      // const { email, password } = e.target; 
      //FORMA MAS NUEVA
      const { email, password } = Object.fromEntries(new FormData(e.target));
      login(email, password);
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <header className="showcase">
        <div className="logo">
          <img src={reactflix} alt="Reactflix Logo" />
        </div>
        <div className="showcase-content">
          <div className="formm">
            <form onSubmit={handleSubmit}>
              <h1 className="loginTitle">Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email or phone number"
                  required
                />
                <br />
                <input
                  className="email"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit">
                  Sign In
                </button>
              </div>
              <div className="help">
                <div>
                  <input type="checkbox" value="true" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#">
                  Need Help ?
                </a>
              </div>
            </form>
          </div>
          <div className="fcbk">
            <a href="https://facebook.com">
              <img
                src="https://i.ibb.co/LrVMXNR/social-fb.png"
                alt="Facebook"
              />
            </a>
            <p>Login with Facebook</p>
          </div>
          <div className="signup">
            <p>New to Reactflix ?</p>
            <a href="#">Sign up now</a>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </header>
      <footer>
        <div className="ftr-content">
          <div className="contact">
            <a href="#">Quesions? Contact us.</a>
          </div>
          <div className="ftr">
            <a href="#">Gift Card Terms</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Statement</a>
          </div>
          <div className="select">
            <select>
              <option>English</option>
              <option>العربية</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
