
const ProductUi = (props) => {
    const product = props.product
  return (
    <div>
        <div className="productCart">
            <img src={product.image} alt="" srcset="" />
            <h4>{product.title}</h4>
            <h4>Category:{product.category}</h4>
            <h4>Description:{product.description}</h4>
        </div>
    </div>
  )
}

export default ProductUi