import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/Header";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create your Notes !</title>
        <meta name="description" content="A small project to take notes using Create T3 app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
