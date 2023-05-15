import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/Header";
import NoteTaker from "~/components/NoteTaker";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create your Notes !</title>
        <meta name="description" content="A small project to take notes using Create T3 app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Header />
        <NoteTaker />
      </main>
    </>
  );
};

export default Home;
