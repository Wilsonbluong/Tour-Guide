import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);

  const expandInfo = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">${price}</div>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={expandInfo}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
