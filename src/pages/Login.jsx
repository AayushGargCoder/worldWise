import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useState } from "react";
function Login() {
  const [emailId, setEmailId] = useState("admin@example.com");
  const [passWord, setPassWord] = useState("aayush");
  return (
    <main className={`${styles.loginForm}`}>
      <PageNav />
      <section>
        <div>
          <label>Emain Address</label>
          <input
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
      </section>
    </main>
  );
}

export default Login;
