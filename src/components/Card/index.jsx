import React, { useState, useEffect } from 'react';

import StarIcon from '../StarIcon';

import './index.scss';

import {
  setLikeAs,
  isShoeLiked as findIfShoeIsLiked,
} from '../../services/shoes';

export default function Card(props) {
  const {
    data: { id, brand, image, name, price },
  } = props;

  const [ShoeData, setShoeData] = useState({
    id: null,
    is_liked: false,
  });

  useEffect(() => {
    (async () => {
      const data = await findIfShoeIsLiked(id);

      if (data.length > 0) {
        setShoeData({ like_id: data[0].id, is_liked: data[0].is_liked });
      }
    })();
  }, [id]);

  const handleStarClick = async () => {
    const data = await setLikeAs(!ShoeData.is_liked, ShoeData.like_id, id);
    setShoeData({ like_id: data[0].id, is_liked: data[0].is_liked });
  };

  console.log(ShoeData);

  return (
    <div className="card">
      <StarIcon
        filled={ShoeData.is_liked}
        className="card-star"
        onClick={handleStarClick}
      />
      <img src={image} alt="Shoes" className="card-image" />
      <div className="card-info">
        <p className="card-info-title">{brand}</p>
        <p className="card-info-description">{name}</p>
        <p className="card-info-price">$ {price}</p>
      </div>
    </div>
  );
}
