import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { Reveal } from './Reveal';
import './Page2.css'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    index: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    index: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    index: 3,
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    index: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    index: 5,
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    index: 6,
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    index: 7,
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    index: 8,
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    index: 9,
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    index: 10,
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    index: 11,
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    index: 12,
  },
];

const animatePhoto = (index) => {
  return {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1 },
  };
};

const Page2 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, itemData.length / itemData.length);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className='header'>
        <Navigation />
        <h2 className='page-title'>Page 2</h2>
      </div>
      {loaded && (
        <motion.div initial={{ opacity: 1, y: 0 }}>
          <ImageList variant="masonry" cols={3} gap={8} style={{ maxWidth: '70vw', margin: 'auto' }}>
            {itemData.map((item, index) => (
              <motion.div key={item.img} initial={{ opacity: 0, y: 20 }} animate={animatePhoto(index)}>
                <Reveal>
                <ImageListItem>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
                </Reveal>
              </motion.div>
            ))}
          </ImageList>
        </motion.div>
      )}
    </div>
  );
};

export default Page2;