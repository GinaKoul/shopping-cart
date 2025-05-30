import styles from "./HomePage.module.css";
import homePageImg from "../../assets/clothing-store.jpg";

const Homepage = () => {
  return (
    <section className={styles.homeSection}>
      <div>
        <h2>Welcome to My Store!</h2>
        <p>
          At My Store, we’re dedicated to bringing you the best products at
          unbeatable prices.
        </p>
        <p>
          Whether you're shopping for everyday essentials, unique gifts, or the
          latest trends, we've got you covered.
        </p>
      </div>
      <figure className={styles.homeFigure}>
        <a
          href="https://www.pexels.com/photo/clothes-displayed-on-hangers-next-to-mirror-5424912/"
          target="_blank"
        >
          <img
            src={homePageImg}
            className={styles.image}
            width={320}
            height={480}
            alt="Clothes of store"
          />
        </a>
        <figcaption>Photo by Arina Krasnikova</figcaption>
      </figure>
    </section>
  );
};

export default Homepage;
