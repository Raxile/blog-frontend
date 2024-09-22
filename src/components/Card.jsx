import React from 'react';

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default Card;
