import React from 'react';
import { productsData } from '../../data';
import Product from '../product';
import './styles.css';
const ProductList = () => {
  return (
    <div
      className='productList'>
        <div
          className='pl-texts'>
            <h1
              className='pl-title'>Create & inspire. It's Lama</h1>
            <p
              className='pl-desc'>
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
            </p>
        </div>
        <div
          className='pl-list'>
            {
              productsData.map((item, index) =>
                {
                  return (
                    <Product
                      key={`item-${index}`}
                      img={item.img}
                      link={item.link} />
                  );
                }
              )
            }
        </div>
    </div>
  )
}

export default ProductList;