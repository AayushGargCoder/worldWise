import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";
function Pricing() {
  return (
    <main className={`${styles.pricing}`}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple Pricing. <br /> Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in
            modi corporis enim, rem, sed odit autem incidunt neque
          </p>
        </div>
        <img src="./../../public/img-2.jpg"></img>
      </section>
    </main>
  );
}

export default Pricing;
