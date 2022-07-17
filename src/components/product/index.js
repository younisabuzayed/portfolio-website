import React from 'react';
import './styles.css';
import defaultImge from '../../img/default-image.png'
const Product = ({ img ,link }) => {
  return (
    <div
      className='product'>
        <div
          className='p-browser'>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <a
          href={link}
          target={'_blank'}
          rel="noreferrer" >
            <img
              src={
                img 
                ? img || img === '' 
                : defaultImge}
              alt=''
              className='p-img' />
        </a>
      </div>
  )
}

export default Product;