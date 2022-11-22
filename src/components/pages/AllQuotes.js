import React from "react";
import QuoteList from "../../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Yara", text: "React" },
  { id: "q2", author: "Yara", text: "React2" },
  { id: "q3", author: "Yara", text: "React3" },
];

const AllQuotes = () => {
  return (
    <h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </h1>
  );
};

export default AllQuotes;
