import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from "@/assets/images/newsarticle_placeholder.jpg";
import styles from "@/styles/App.module.css";
import Button from "react-bootstrap/Button";
import { NewsArticle } from "@/models/newsAPI";

interface NewsArticleEntryProps {
  article: NewsArticle;
}

const NewsArticleEntry = ({
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) => {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;

  return (
    <Card className="h-100 w-75">
      <Card.Body>
        <Image
          src={validImageUrl || placeholderImage}
          width={50}
          height={200}
          alt="News article image"
          className={`card-img-top ${styles.image}`}
        />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsArticleEntry;
