import { useParams } from "react-router-dom";
import { productList } from "../assets/data";
import './product.css'
function Products({func1}){
    let {id}=useParams();
    console.log(productList.at(id))
    let item=productList.at(id);
    return <>
    <section className="products">  
        <img src={item.pic}  alt="anything" />
        <p>{item.info}</p>
        <p>Price: {item.price}$</p>
        <button onClick={()=>{
        }}>
            Add
        </button>
    </section>
    </>
}export default Products;