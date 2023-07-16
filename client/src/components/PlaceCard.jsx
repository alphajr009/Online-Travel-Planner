import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const PlaceCard = ({ PlaceCardName, src }) => (
  <Card
    hoverable
    cover={<img alt="example" src={src} />}
  >
    <p>{PlaceCardName}</p >
  </Card>
);

export default PlaceCard;