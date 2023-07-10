import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const PlaceCard = ({PlaceCardName}) => (
  <Card
    hoverable
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <p>{PlaceCardName}</p>
  </Card>
);

export default PlaceCard;