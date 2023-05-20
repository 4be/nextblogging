export interface newsAPIresponse {
  author: string;
  tittle: string;
  description: string;
  url: string;
  urlImage?: string;
  publishDate: string;
  content: string;
}

export interface newsCall {
  articles: newsAPIresponse[];
}
