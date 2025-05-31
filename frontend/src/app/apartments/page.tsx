'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Row, Col, Spin } from 'antd';
import ApartmentCard from '@/components/ApartmentCard/ApartmentCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import Header from '@/components/Header/Header';
import styles from './apartments.module.scss';

const PAGE_SIZE = 20;

type Apartment = {
  id: number;
  unitName: string;
  unitNumber: string;
  project: string;
  price: number;
  size: number;
  reserved: boolean;
  createdAt: string; 
};

const Page = () => {
const [apartments, setApartments] = useState<Apartment[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const fetchApartments = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
  
    const res = await fetch(`/api/apartments?skip=${skip}&take=${PAGE_SIZE}`);

      const data = await res.json();

      if (data.length < PAGE_SIZE) {
        setHasMore(false); 
      }

      setApartments((prev) => [...prev, ...data]);
      setSkip((prev) => prev + PAGE_SIZE);
    } catch (error) {
      console.error('Failed to fetch apartments:', error);
    } finally {
      setLoading(false);
    }
  }, [skip, loading, hasMore]);

 useEffect(() => {
  if (apartments.length === 0) fetchApartments();
}, []); 

  // Scroll event handler
useEffect(() => {
  const container = document.querySelector(`.${styles.apartmentList}`);
  if (!container) return;

  const onScroll = () => {
    if (
      container.scrollTop + container.clientHeight >= container.scrollHeight - 100 &&
      !loading &&
      hasMore
    ) {
      fetchApartments();
    }
  };

  container.addEventListener('scroll', onScroll);
  return () => container.removeEventListener('scroll', onScroll);
}, [fetchApartments, loading, hasMore]);

  return (
    <div className={styles.wrapper}>
      <Header title={'Urban finder'} />
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>
      <div className={styles.apartmentList}>
        <Row gutter={[16, 16]}>
          {apartments.map((apt) => (
            <Col key={apt.id} xs={24} sm={12} md={8}>
              <Link href={`/apartments/${apt.id}`} style={{ display: 'block' }}>
                <ApartmentCard
                  title={apt.unitName}
                  description={`${apt.project || ''} · ${apt.size || ''} · $${apt.price}/mo`}
                  image={'/images/apartment.webp'}
                />
              </Link>
            </Col>
          ))}
        </Row>
        {loading && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Spin />
          </div>
        )}
        {!hasMore && (
          <div style={{ textAlign: 'center', marginTop: 16, color: '#888' }}>
            No more apartments to show.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
