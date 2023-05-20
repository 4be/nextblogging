import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import { newsAPIresponse } from "@/models/newsAPI";

interface accountLinkProps {
  newsArticles: newsAPIresponse[];
}

export const getServerSideProps: GetServerSideProps<
  accountLinkProps
> = async () => {
  const resAccountResponse = await fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2023-05-19&sortBy=popularity&apiKey=" +
      process.env.NEWSAPIKEY
  );
};

export default function accountLink({ newsArticles }: accountLinkProps) {
  return (
    <>
      <Head>
        <title key={"title"}>Authentication | Bank Sinarmas</title>
      </Head>
      <main>
        <h1>Auth Page</h1>
      </main>
    </>
  );
}
