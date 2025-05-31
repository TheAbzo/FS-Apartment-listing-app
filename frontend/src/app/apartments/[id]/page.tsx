'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import styles from './apartmentDetails.module.scss';
import React, { use } from 'react';
import { useRouter } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
  const { id } = use(params);
    const router = useRouter();
  console.log(id);

  const apartment = {
    image: '/images/apartment.webp',
    title: 'Modern Studio',
    address: 'Downtown, New York',
    description:
      'A beautiful modern studio apartment located in the heart of the city. Spacious and well-lit with modern amenities.',
  };

   const handleContactClick = () => {
    router.push('/welcome'); 
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.backLink}>
        <Link href="/apartments" className={styles.backLink}>
          <ArrowLeftOutlined /> Back to listings
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src={apartment.image}
            alt={apartment.title}
            width={600} 
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{apartment.title}</h1>
          <p className={styles.address}>{apartment.address}</p>
          <p className={styles.description}>{apartment.description}</p>
          <button onClick={handleContactClick}>Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
