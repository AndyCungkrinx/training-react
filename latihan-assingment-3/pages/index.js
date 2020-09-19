import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Layout from "../components/container"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Training React session-3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
          <Layout style={{width:'100%'}}/>
        </Container>
      </React.Fragment>
      
    </div>
  )
}
