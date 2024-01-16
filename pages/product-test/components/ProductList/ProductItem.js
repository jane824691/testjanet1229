// ProductItem.js
import React from 'react'
import Link from 'next/link'

function ProductItem(props) {
  const { pid, product_name, product_price } = props.product
  console.log(props.product);
  
  return (
    <div className="col" key={pid}>
      <Link href={`/product/${pid}`} className="noline">
        <div className="card border-primary">
          <img
            src="/images/product/638348807730300000 (1).jfif"
            alt="name of product"
            className="card-img-top"
          />
          <div className="card-body no-space-x">
            <p className="card-text">{product_name}</p>
            <span className="h-currency bold h-now">
              <span>NT$ </span>
              {product_price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductItem
