import { NextPage } from "next"
import Navigation from "../../components/Navigation";
import Link from "next/link";

const login: NextPage = () => {
    return (
      <div>
        <div className="login">
          <div className="login-triangle"></div>

          <h2 className="login-header">Log in</h2>

          <form className="login-container">
            <p>
              <input type="email" placeholder="Email"></input>
            </p>
            <p>
              <input type="password" placeholder="Password"></input>
            </p>
            <p>
              <button type="submit">
                <Link href="/logout">Login </Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    );
}


export default login;