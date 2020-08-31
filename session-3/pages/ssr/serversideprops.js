import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/container'

function Page(props) {
  console.log(props);
  const { stars } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Next stars: {stars}</div>
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

export async function getServerSideProps(context) {
  const response = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await response.json();
  return {
    props: {
      stars: json.stargazers_count,
    }, // will be passed to the page component as props
  };
}

export default Page;
