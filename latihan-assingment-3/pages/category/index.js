import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import Layout from '../../components/container';
import { useQuery, gql } from "@apollo/client";
import Link from 'next/link';
import {withApollo} from '../../lib/apollo';

const CATEGORY_LIST = gql`
  {
    categoryList(filters:{}) {
      id
      name
      url_key
      url_path
      display_mode
      children {
        id
        name
        url_key
        url_path
        display_mode
      }
    }
  }
`;

function Category(props) {
  const response = useQuery(CATEGORY_LIST);
  console.log(response)
  const { loading, error, data } = response;
  console.log(loading);
  console.log(data);
  if (loading) {
    return <div>loading...</div>;
  }  if (error) {
    return <div>error...</div>;
  }  
  const category = data.categoryList;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Layout />
        <h2>Category List</h2>
        <ul>
          {category.map((val, idx) => {
            return (
            <li key={idx}>
              <Link href="/category/[category_id]" as={`/category/${val.id}`}>
                <a>{val.name}</a>
              </Link>
            </li>
            );
          })}
        </ul>
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

export default withApollo({ ssr: true })(Category);