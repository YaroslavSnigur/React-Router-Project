import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Yara", text: "React" },
  { id: "q2", author: "Yara", text: "React2" },
  { id: "q3", author: "Yara", text: "React3" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
