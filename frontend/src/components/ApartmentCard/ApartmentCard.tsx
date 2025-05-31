'use client';

import { Card } from 'antd';
import Image from 'next/image';

const { Meta } = Card;

type ApartmentCardProps = {
  title: string;
  description: string;
  image: string;
};

const ApartmentCard = ({ title, description, image }: ApartmentCardProps) => (
  <Card
    hoverable
    cover={
      <Image
        src={image}
        alt={title}
        width={200}
        height={100}
        style={{ objectFit: 'cover' }}
      />
    }
  >
    <Meta title={title} description={description} />
  </Card>
);

export default ApartmentCard;
