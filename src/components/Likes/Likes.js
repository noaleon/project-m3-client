import { useState } from 'react';
import './Likes.css';

const Likes = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setCount(count + (liked ? -1 : 1));
  };

  return (
    <div className='likes'>
      <button className='like-btn' onClick={handleLike}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 96 960 960'
          width='24'
          height='24'
          fill={liked ? '#f1b252' : 'gray'}
        >
          <path d='m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z' />
        </svg>
      </button>
      <div>{count} likes</div>
    </div>
  );
};

export default Likes;
