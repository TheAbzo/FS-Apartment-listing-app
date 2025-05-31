'use client';

import { Row, Col } from 'antd';
import ApartmentCard from '@/components/ApartmentCard/ApartmentCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import Header from '@/components/Header/Header';
import styles from './apartments.module.scss';

const apartments = [
  {
    id: 1,
    title: 'Modern Studio',
    description: 'Downtown · 1 Bed · $800/mo',
   image: '/images/apartment.webp',
  },
  {
    id: 2,
    title: 'Cozy 2-Bedroom',
    description: 'Uptown · 2 Bed · $1200/mo',
    image: '/images/apartment.webp',
  },
  {
    id: 3,
    title: 'Luxury Loft',
    description: 'City Center · 3 Bed · $2000/mo',
    image: '/images/apartment.webp',
  },
];

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <Header title = {'Urban finder'} />
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>
      <div className={styles.apartmentList}>
        <Row gutter={[16, 16]}>
          {apartments.map((apt) => (
            <Col key={apt.id} xs={24} sm={12} md={8}>
              <ApartmentCard
                title={apt.title}
                description={apt.description}
                image={apt.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Page;
