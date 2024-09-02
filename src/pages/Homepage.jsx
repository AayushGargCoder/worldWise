import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import style from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={`${style.container}`}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link to="/app" className={`${style.cta}`}>
          Start Tracking Now
        </Link>
      </section>
    </div>
  );
}

export default Homepage;
