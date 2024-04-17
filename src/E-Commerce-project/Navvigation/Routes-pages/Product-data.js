// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { useDispatch, useSelector } from 'react-redux';
// import  { BasicExample } from '../../Spinners/Spinner';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { ADD_TO_CART } from '../../Redux/Action/Action';
// import { Link } from 'react-router-dom';
// import {Table} from "react-bootstrap";





// function ProductData(){


//     // const dispatch=useDispatch()

//     // const send=(eachobject)=>{
//     //      dispatch(ADD_TO_CART(eachobject))
//     // }


//     const updateddata=useParams()


// const [product,setProducts]=useState(null)
// console.log(product)

// useEffect(()=>{
//     axios.get(`https://dummyjson.com/products/${updateddata.id}`)
//     .then((reponse)=>setProducts(reponse.data))
// },[updateddata.id])



//     return(
//         <>
//             <Link to={"/products"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
 
//  <h2 style={{marginLeft:"40%"}}>Product Data</h2>


//   {product && (
  
//     <div style={{marginLeft:"30%"}}>
//      {product.images.length > 0 && (
     
//         <img src={product.images[0]} style={{width:"380px",marginLeft:"80px",height:"350px"}} ></img>
//     )}
//                 {/* <div style={{position:"absolute",top:"25%",left:"40%"}} > */}
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <div>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 {/* className="details" */}
//                 <Table>
//                     <tr>
//                         <td style={{width:"260px"}}>
                            
//                             <p><strong>Brand</strong> : {product.brand}</p>
//                             <p><strong>Description</strong> : {product.description}</p>
//                             <p><strong>Price</strong> : ₹ {product.price}</p>
                          
//                         </td>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         <td style={{marginLeft:"80px" }}>
//                             <p><strong>Rating :</strong> <span style={{backgroundColor:' rgb(8, 215, 194)',color:"black",padding:"4px 10px",fontSize:"20px",borderRadius:"10px"}}>{product.rating} ★</span></p>
//                             <p><strong>Stock :</strong> {product.stock}</p>
                          
                
//                         </td>
//                     </tr>
//                 </Table>

//                 </div>
//                 </div>

// )}






//         </>
//     )
// }
// export default ProductData


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function ProductData() {
  const updatedData = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${updatedData.id}`)
      .then((response) => setProducts(response.data));
  }, [updatedData.id]);

  // Define styles for the component
  const containerStyle = {
    // backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/originals/a1/4d/e0/a14de021c4fa8049d2d798d5b98d7419.jpg')",
    backgroundImage: "url('https://i.pinimg.com/originals/4c/88/0b/4c880bf7b26de238f5b9f84c537c4250.jpg')",
    backgroundSize: "cover", // Adjust background size
    backgroundPosition: "center", // Center the background image
    padding: "20px", // Add padding to the container
    height: "100vh", // Set height to full viewport height
    display: "flex", // Use flexbox layout
    flexDirection: "column", // Flex direction as column
    alignItems: "center", // Center the content horizontally
  };

  return (
    <div style={containerStyle}>
      <Link to={"/products"} style={{ color: "black", fontSize: "50px" }}>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <h2>Product Data</h2>

      {product && (
        <div>
          {product.images.length > 0 && (
            <img
              src={product.images[0]}
              style={{ width: "380px", height: "350px", marginBottom: "20px" }}
              alt={product.title}
            />
          )}
          <Table>
            <tbody>
              <tr>
                <td style={{ paddingRight: "40px" }}>
                  <p><strong>Brand</strong>: {product.brand}</p>
                  <p><strong>Description</strong>: {product.description}</p>
                  <p><strong>Price</strong>: ₹{product.price}</p>
                </td>
                <td>
                  <p>
                    <strong>Rating</strong>:{" "}
                    <span
                      style={{
                        backgroundColor: "rgb(8, 215, 194)",
                        color: "black",
                        padding: "4px 10px",
                        fontSize: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      {product.rating} ★
                    </span>
                  </p>
                  <p><strong>Stock</strong>: {product.stock}</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default ProductData;
