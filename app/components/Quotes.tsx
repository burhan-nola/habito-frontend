import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [loading, isLoading] = useState(true);

  const categories = [
    "amazing",
    "art",
    "dreams",
    "education",
    "experience",
    "forgiveness",
    "friendship",
    "funny",
    "happiness",
    "humor",
    "inspirational",
    "leadership",
    "knowledge",
    "learning",
    "success",
    "mornig",
  ];

  const apiKey = "WLXM3//5moaBs4IAcia2cw==FjIs0kU1fxev1O6h";
  useEffect(() => {
    const rand = Math.floor(Math.random() * 10);

    const catRand = categories[rand];

    const getQuote = async () => {
      const res: AxiosResponse = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${catRand}`,
        { headers: { "X-Api-Key": apiKey } }
      );
      setQuote(res.data[0].quote);
      setAuthor(res.data[0].author);
      setCategory(catRand);
      isLoading(false);
    };
    getQuote();
  }, []);
  return (
    <div className="row">
      {loading ? null : (
        <div className="col-md-6 text-center">
          <h6>-{category}-</h6>
          <p>{quote}</p>
          <h6>
            <i>&quot{author}&quot</i>
          </h6>
        </div>
      )}
    </div>
  );
};

export default Quotes;
