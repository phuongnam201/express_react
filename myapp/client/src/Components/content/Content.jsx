import { useEffect, useState } from "react";
import React from "react";
import "./content.css";

const Content = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <section>
      <div className="container">
        <div className="content">
          {typeof backendData.contents === "undefined" ? (
            <p className="centered-text">Loading............</p>
          ) : (
            backendData.contents.map((content, i) => {
              return (
                <p className="centered-text" key={i}>
                  {content}
                </p>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
