// import { Link, useNavigate, useParams } from "react-router-dom";
// import "./Products-details.css"
// import Table from 'react-bootstrap/Table';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { REMOVE_CART_ITEMS, REMOVE_ONE_ITEAM } from "../../Redux/Action/Action";
// import { ADD_TO_CART } from "../../Redux/Action/Action";
// import Card from "react-bootstrap/Card"


// function Buyproduct(){
//     const [data,setData]=useState([])
// // console.log(data)
// const {id}=useParams()
// // console.log(id)

// const Back=useNavigate()

// const dispatch=useDispatch()

// const getdata=useSelector((state)=>state.ReducerAction.card)
// console.log(getdata)
// const compare=()=>{

//     let comparedata=getdata.filter((ids)=>{
//         return ids.id == id
//     })
//     setData(comparedata)

// }

// useEffect(()=>{
   
//     compare()

// },[id])

// const send=(eachobject)=>{
//     dispatch(ADD_TO_CART(eachobject))
// }

// const del=(id)=>{
//     dispatch(REMOVE_CART_ITEMS(id))
//     Back("/products")
// }

// // const del1=(id)=>{
// //     dispatch(REMOVE_CART_ITEMS(id))
// //     alert("product is Buy sucessfully")
// //     Back("/products")
// // }

// const remove=(Item)=>{
//     dispatch(REMOVE_ONE_ITEAM(Item))
// }


//     return(
//         <>
       
//         <Link to={"/products"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
       
//         <h1>Product Details</h1>
//       <Card>
//          <div className="container mt-2 container">

//         <section className="container mt-3">
//             <div className="iteamsdetails">
            
//                 {
//                     data.map((items)=>{
//                         return(
//                             <>
                            

//                 <div className="items_img">
//                 <img src={items.images[0]} alt="John"></img>
//                 </div>
//                 <div className="details">
//                 <Table>
//                     <tr>
//                         <td style={{width:"260px"}}>
                            
//                             <p><strong>Brand</strong> : {items.brand}</p>
//                             <p><strong>Description</strong> : {items.description}</p>
//                             <p><strong>Price</strong> : ₹ {items.price}</p>
//                             <p><strong>Total</strong> : ₹ {items.price * items.quantity}</p>
                               
//                                <div style={{background:"brown",width:"100px",color:"white",display:"flex",justifyContent:"space-between",cursor:"pointer",borderRadius:"30px"}}>
//                                 <span style={{fontSize:"30px"}} onClick={items.quantity <= 1 ? ()=>del(items.id) :()=>remove(items)}>-</span>
//                                 <span style={{fontSize:"30px"}}>{items.quantity}</span>
//                                 <span style={{fontSize:"30px"}} onClick={()=>send(items)}>+</span>
//                                </div>    
//                         </td>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         <td style={{marginLeft:"80px" }}>
//                             <p><strong>Rating :</strong> <span style={{backgroundColor:' rgb(8, 215, 194)',color:"black",padding:"4px 10px",fontSize:"20px",borderRadius:"10px"}}>{items.rating} ★</span></p>
//                             <p><strong>Stock :</strong> {items.stock}</p>
//                             <p><strong>Remove : </strong> <i className="fas fa-trash" style={{color:"red",cursor:"pointer"}} onClick={()=>del(items.id)}></i></p>
                      
//                         {/* <button onClick={()=>del1(items.id)}>Buy Now</button> */}
//                         <Link to={"/Buying"}><button >Buy Now</button></Link>
//                         </td>
//                     </tr>
//                 </Table>

//                 </div>
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         </section>
//         </div>
//         </Card>
//         </>
//     )
// }
// export default Buyproduct



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART_ITEMS, REMOVE_ONE_ITEAM, ADD_TO_CART } from "../../Redux/Action/Action";
import "./Products-details.css"; // Include your external CSS file for additional styling

function Buyproduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.ReducerAction.card);
    const [productData, setProductData] = useState([]);

    // Fetch the specific product data from the cart using the ID from the URL parameters
    useEffect(() => {
        const product = cartItems.find((item) => item.id === Number(id));
        if (product) {
            setProductData([product]);
        }
    }, [id, cartItems]);

    // Event handlers
    const handleAddToCart = (item) => {
        dispatch(ADD_TO_CART(item));
    };

    const handleRemoveOneItem = (item) => {
        dispatch(REMOVE_ONE_ITEAM(item));
    };

    const handleRemoveCartItem = (itemId) => {
        dispatch(REMOVE_CART_ITEMS(itemId));
        navigate("/products");
    };

    return (
        <div
            className="buy-product-container"
            style={{
                backgroundImage: "url('https://www.wallpaperflare.com/static/930/175/684/circles-highlights-background-form-wallpaper.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "100vh",
                padding: "20px",
                color: "white",
            }}
        >
            <Link to="/products" style={{ color: "black", fontSize: "30px", marginBottom: "20px" }}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <h1 style={{ marginBottom: "20px" }}>Product Details</h1>

            {productData.map((item) => (
                <Card
                    key={item.id}
                    style={{
                        maxWidth: "800px",
                        margin: "auto",
                        marginTop: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
                        color: "black",
                        borderRadius: "10px",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Soft shadow effect
                    }}
                    className="product-card" // Optional: Use CSS classes for additional styles
                >
                    <Card.Img
                        variant="top"
                        src={item.images[0]}
                        alt={item.title}
                        style={{
                            maxHeight: "300px",
                            objectFit: "contain",
                            borderRadius: "10px", // Rounded corners for the image
                        }}
                    />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text><strong>Brand:</strong> {item.brand}</Card.Text>
                        <Card.Text><strong>Description:</strong> {item.description}</Card.Text>
                        <Card.Text><strong>Price:</strong> ₹{item.price}</Card.Text>
                        <Card.Text><strong>Total:</strong> ₹{item.price * item.quantity}</Card.Text>
                        <div className="quantity-control">
                            <button
                                onClick={item.quantity <= 1 ? () => handleRemoveCartItem(item.id) : () => handleRemoveOneItem(item)}
                                style={{ border: "none", background: "transparent", color: "white", fontSize: "20px" }}
                            >
                                -
                            </button>
                            <span style={{ padding: "5px 10px" }}>{item.quantity}</span>
                            <button onClick={() => handleAddToCart(item)} style={{ border: "none", background: "transparent", color: "white", fontSize: "20px" }}>
                                +
                            </button>
                        </div>
                        <p><strong>Rating:</strong> <span style={{ backgroundColor: 'rgb(8, 215, 194)', color: "black", padding: "4px 10px", fontSize: "16px", borderRadius: "10px" }}>{item.rating} ★</span></p>
                        <p><strong>Stock:</strong> {item.stock}</p>
                        <p><strong>Remove:</strong> <i className="fas fa-trash" style={{ color: "red", cursor: "pointer" }} onClick={() => handleRemoveCartItem(item.id)}></i></p>
                        <Link to="/Buying">
                            <button style={{ marginTop: "10px" }}>Buy Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Buyproduct;



