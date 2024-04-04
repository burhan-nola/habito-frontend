import React from "react";
import styleCard from "../css/blogCard.module.css";

const BlogPage = () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  const content = "abcdefghij";
  return (
    <div className="container">
      <h1 className="text-center">Habito news</h1>
      <div className="row" style={{ paddingBottom: "50px" }}>
        {arr.map((id: number) => (
          <div key={id} className={`col-md-4`}>
            <div className={`${styleCard.customCard} text-center`}>
              <img src={`./device.png`} className="card-img-top" alt="..." />
              <div className="card-body">
                <br />
                <h5 className="card-title">Title</h5>
                <p className="card-text">{content.slice(0, 5)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
