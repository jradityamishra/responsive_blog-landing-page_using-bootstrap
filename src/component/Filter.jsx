import React from 'react';
import Blog from './Blog';
import SideCard from './SideCard';

const Filter = () => {
  return (
    <div className='container mt-4' style={{maxWidth:'80vw'}}>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <Blog />
        </div>
        <div className='col-12 col-md-4 d-none d-md-flex flex-column align-items-center'>
          <SideCard />
          <div className='w-100' style={{ height: '1px', backgroundColor: '#B8B8B8', marginTop: '8px' }}></div>
          <p style={{ fontSize: '12px', paddingLeft: '40px', marginLeft: '20px' }}>
            Your location will help us serve better and extend a personalised experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
