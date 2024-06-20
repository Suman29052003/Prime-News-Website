import React from "react";
import NewsCard from "./NewsCard";

const Highlights = (props) => {
  return (
    <section className="min-h-[60vh] w-full">
      <div className="grid grid-cols-4">
        <NewsCard searchInput={props.searchInput} />
      </div>
    </section>
  );
};

export default Highlights;
