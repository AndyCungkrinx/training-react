const Page = (props) => {
  console.log(props);
    return <div>Contoh static path: {props && props.url ? props.url.id : 'none'}</div>;
  };  export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: "1" } },
        { params: { id: "2" } },
        { params: { id: "3" } },
        { params: { id: "4" } }
      ],
      fallback: false,
    };
  }  export async function getStaticProps({ params }) {
    return {
      props: {
        url: params,
      },
    };
  }  export default Page;