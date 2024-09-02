import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
function Product() {
  return (
    <main className={`${styles.product}`}>
      <PageNav />
      <section>
        <img src="./../../public/img-1.jpg"></img>
        <div>
          <h2>About worldwide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            cupiditate minus harum corrupti eligendi et quos maiores qui dolorem
            cumque sint, veritatis asperiores, voluptate assumenda fugiat est
            facere quod ipsam.
          </p>
          <p>
            Maiores odio asperiores magni neque incidunt in nisi debitis autem
            inventore. Provident dicta in reiciendis animi neque earum eveniet
            debitis ipsam porro aut architecto quos quae quasi, repellat velit
            assumenda.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
