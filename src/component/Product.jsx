import React from 'react'
import ProductDetail from './ProductDetail';

function Product({item}) {
    const {image,price,description,title}=item

  return (
    <>
        <div className="col-md-3">
        <div className="card mb-3" >
        <img src={image} className="img-fluid p-5 productviewimage" style={{height: '300px'}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,20)}</h5>
            <p className="card-text">{description.slice(0,50)}</p>
            <a href="/viewproduct" className="btn btn-primary">{price}&nbsp;&#8377;</a>

        </div>
        </div>
        </div>
    </>
  )
}

export default Product