import React from 'react';

import StarIcon from '../StarIcon';

import './index.scss';

export default function Card(props) {
  const { isLiked = false, image_url, title, description, price } = props;

  return (
    <div className="card">
      {isLiked ? (
        <StarIcon filled className="card-star" />
      ) : (
        <StarIcon className="card-star" />
      )}
      <img src={image_url} alt="Shoes" className="card-image" />
      <div className="card-info">
        <p className="card-info-title">{title}</p>
        <p className="card-info-description">{description}</p>
        <p className="card-info-price">$ {price}</p>
      </div>
    </div>
  );
}
