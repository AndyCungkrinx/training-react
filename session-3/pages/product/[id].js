import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/container';
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo} from "../../lib/apollo";

const PRODUCT_LIST = gql`
  query getProductCategory($category_id: String!) {
    products(pageSize: 5, filter: { category_id: { eq: $category_id } }) {
      total_count
      items {
        id
        name
        url_key
      }
    }
  }
`;

function ProductId(props) {
  const router = useRouter();
  const id = router.query.id;
  if (id) {
    const response = useQuery(PRODUCT_LIST, {
      variables: {
        category_id: id,
      },
    });
    const { loading, error, data } = response;
    console.log(loading);
    console.log(data);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>welcome category by Id {router.query.id}</h2>
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

export default withApollo({ ssr: true })(ProductId);
