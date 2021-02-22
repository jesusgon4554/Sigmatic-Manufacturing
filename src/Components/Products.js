import "./Button.css"

function Products(props) {
    return (
        <div>
           <button className="button">{props.productName}</button>
        </div>
    )
}

export default Products
