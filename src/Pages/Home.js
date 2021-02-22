import Products from "../Components/Products"
import Sidebar from "../Components/Sidebar";

import "./Home.css"
function Home() {
    return (
        <div className="Container">
            <div className="Products">
            <h2>Products</h2>
                <Products productName="Cable and RF Asseblies"/>
                <Products productName="D-Sub" />
                <Products productName="Molex Connection" />
                <Products productName="USB/CAT5/CAT6" />
                <Products productName="Circular Connectors" />
                <Products productName="Solder Connections" />
               
             </div>
            <div class="ProductDescription">
   
             
                <h1>Hello</h1>
                {/* <h1>{productName}</h1> */}
                {/* <ProductImg />
                <ProductDescription /> */}
            </div>
        <Sidebar />
        </div>
    )
}

export default Home
