import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const DetalisProduct = () => {
  const { productKey } = useParams();
  const FakeData = fakeData;
  const product = FakeData.find((pd) => pd.key === productKey);

  
  return (
    <div>
      <div style={{ maxWidth: "520px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>
          Product details {product.category}
        </h1>
        <Product product={product} addToCart={false}></Product>
      </div>

      {/* <div style={{maxWidth:"520px" , margin:"0 auto"}}>
            <div style={{display:"flex"}}>
                <img src={product.img} alt=""/>
                <h2 style={{marginLeft:'10px'}}>{product.name}</h2>
            </div>
            <p style={{textAlign:"center"}}><a href={product.url} target="_blank">Show the Product in Amazon</a></p>
            <div style={{marginLeft:'140px',paddingTop:'30px',dispaly:"flex",justifyContent:"center"}}>
                <spa>${product.price}</spa>
                <button style={{marginLeft:'140px'}}> Buy Now </button>
            </div>
            </div> */}
    </div>
  );
};

export default DetalisProduct;
