import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/container';
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo} from "../../lib/apollo";

const CATEGORY_ID = gql`
query Category($ids: String!) {
  categoryList(filters: { ids: { eq: $ids } }) {
    id
    name
    url_key
    url_path
    display_mode
    product_count
    products {
      total_count
      items {
        name
        sku
        sale
        small_image{
            url
            label
        }
      price_range {
        maximum_price {
          final_price {
            value
            currency
            }
          }
        }
      }
    }
  }
}
`;

function CategoryId(props) {
  const router = useRouter();
  const category_id = router.query.category_id;
  //Category By Id
    const response1 = useQuery(CATEGORY_ID, {
      variables: {
        ids: category_id,
      },
    });
    const { loading, error, data } = response1;
    if (loading) {
      return <div>loading...</div>;
    }  if (error) {
      return <div>error...</div>;
    } 
    const category = data.categoryList;
    const product = data.categoryList[0].products.items;
    console.log(category);
    console.log(product);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>welcome product category by Id {category_id}</h2>
        <Layout />
        <div>
          {category.map((val, idx) => {
            return (
            <div key={idx}><h1>{val.name}</h1>
                <div>
                  <h2>{val.name}</h2>
                </div>
            </div>
            );
          })}
        </div>
        <hr></hr>
        {product.map((prod, idz) => {
            return (
            <div key={idz}><h1>{prod.name}</h1>
                <div>
                  <h2>{prod.name}</h2>
                  <h2>{prod.sku}</h2>
                  <h2>{prod.small_image.url}</h2>
                  <h2>{prod.small_image.label}</h2>
                  <h2>{prod.price_range.maximum_price.final_price.currency}{prod.price_range.maximum_price.final_price.value}</h2>
                </div>
            </div>
            );
          })}
        <div>

        </div>
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



export default withApollo({ ssr: true })(CategoryId);
