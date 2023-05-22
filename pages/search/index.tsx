import { NewsArticle } from "@/models/NewsAPI";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchIndex = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingisError] =
    useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      alert(searchQuery);
    }
  }

  return (
    <main>
      <h1>index search</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            name="searchQuery"
            placeholder="E.g. Books,Nokia.."
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
          Search
        </Button>
      </Form>
    </main>
  );
};

export default SearchIndex;
