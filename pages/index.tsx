import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/NewsAPI";
import NewsArticleGrid from "@/components/NewsArticleGrid";

interface accountLinkProps {
  newsArticles: NewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  accountLinkProps
> = async () => {
  await new Promise((r) => setTimeout(r, 3000));
  const resAccountResponse = await fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2023-05-19&sortBy=popularity&apiKey=" +
      process.env.NEWSAPIKEY
  );
  const newsResponse: NewsResponse = await resAccountResponse.json();
  return {
    props: { newsArticles: newsResponse.articles },
  };
};

export default function accountLink({ newsArticles }: accountLinkProps) {
  return (
    <>
      <Head>
        <title key={"title"}>Authentication | Bank Sinarmas</title>
      </Head>
      <main>
        <h1>Test Page</h1>

        <NewsArticleGrid article={newsArticles} />
      </main>
    </>
  );
}
