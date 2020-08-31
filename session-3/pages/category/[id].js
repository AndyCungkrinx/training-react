import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/container';
import { useRouter } from "next/router";


export default function CategoriId(props) {
  const router = useRouter();
  console.log(router);
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>welcome category by Id {router.query.id}</div>
        <Layout />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
