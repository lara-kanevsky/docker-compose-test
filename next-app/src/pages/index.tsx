import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Lare.com.ar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>Lare.com.ar</span>!
        </h1>

        <p className={styles.description}>
          Explore creativity, projects, and ideas in a fun and interactive way.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ by Lare</p>
      </footer>
    </div>
  );
}
