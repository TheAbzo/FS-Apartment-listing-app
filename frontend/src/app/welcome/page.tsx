import Link from 'next/link';
import styles from './welcome.module.scss';

const WelcomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}> Home Finder</h1>
        <Link href="/apartments">
          <button className={styles.button}>Explore</button>
        </Link>
      </div>
    </main>
  );
};

export default WelcomePage;
