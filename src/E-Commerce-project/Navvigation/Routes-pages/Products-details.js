// import { Link, useNavigate, useParams } from "react-router-dom";
// // import Button from "../../Nav-bar/Button"
// import "./Products-details.css"
// import Table from 'react-bootstrap/Table';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { REMOVE_CART_ITEMS, REMOVE_ONE_ITEAM } from "../../Redux/Action/Action";
// import { ADD_TO_CART } from "../../Redux/Action/Action";


// function ProductDetails(){
//     const [data,setData]=useState([])
// // console.log(data)
// const {id}=useParams()
// // console.log(id)

// const Back=useNavigate()

// const dispatch=useDispatch()

// const getdata=useSelector((state)=>state.ReducerAction.card)
// // console.log(getdata)
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

// const remove=(Item)=>{
//     dispatch(REMOVE_ONE_ITEAM(Item))
// }


//     return(
//         <>
       
//         <Link to={"/products"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
       
//         <h1>Product Details</h1>
      
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
//         </>
//     )
// }
// export default ProductDetails


import { Link, useNavigate, useParams } from "react-router-dom";
import "./Products-details.css";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART_ITEMS, REMOVE_ONE_ITEAM } from "../../Redux/Action/Action";
import { ADD_TO_CART } from "../../Redux/Action/Action";

function ProductDetails() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getdata = useSelector((state) => state.ReducerAction.card);

    const compare = () => {
        const comparedata = getdata.filter((item) => item.id === parseInt(id));
        setData(comparedata);
    };

    useEffect(() => {
        compare();
    }, [id]);

    const send = (item) => {
        dispatch(ADD_TO_CART(item));
    };

    const deleteItem = (id) => {
        dispatch(REMOVE_CART_ITEMS(id));
        navigate("/products");
    };

    const removeItem = (item) => {
        dispatch(REMOVE_ONE_ITEAM(item));
    };

    return (
        <div
            style={{
                backgroundImage: "url('https://wallpapersmug.com/download/1920x1080/74b909/colorful-forms-abstract-4k.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                boxSizing: "border-box"
            }}
        >
            <Link to="/products" style={{ color: "black", fontSize: "30px", marginBottom: "20px" }}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <h1 style={{ marginBottom: "20px" }}>Product Details</h1>

            <div className="product-details-container" style={{ maxWidth: "1200px", width: "100%" }}>
                <section className="product-details-section">
                    <div className="product-details-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "20px",
                        width: "100%"
                    }}>
                        {data.map((items) => (
                            <div key={items.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{ marginBottom: "20px" }}>
                                    <img
                                        src={items.images[0]}
                                        alt="Product"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "300px" // Set the maximum height of the image to 300px
                                        }}
                                    />
                                </div>
                                <div className="details" style={{ width: "100%" }}>
                                    <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                                <td><strong>Brand</strong>: {items.brand}</td>
                                                <td><strong>Description</strong>: {items.description}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Price</strong>: ₹{items.price}</td>
                                                <td><strong>Total</strong>: ₹{items.price * items.quantity}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <div style={{ background: "brown", color: "white", display: "flex", justifyContent: "space-between", width: "120px", borderRadius: "15px" }}>
                                                        <button onClick={items.quantity <= 1 ? () => deleteItem(items.id) : () => removeItem(items)} style={{ border: "none", background: "transparent", color: "white", fontSize: "20px", padding: "5px" }}>-</button>
                                                        <span style={{ padding: "5px 10px" }}>{items.quantity}</span>
                                                        <button onClick={() => send(items)} style={{ border: "none", background: "transparent", color: "white", fontSize: "20px", padding: "5px" }}>+</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Rating</strong>: <span style={{ backgroundColor: 'rgb(8, 215, 194)', color: "black", padding: "4px 10px", fontSize: "16px", borderRadius: "10px" }}>{items.rating} ★</span></td>
                                                <td><strong>Stock</strong>: {items.stock}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <button onClick={() => deleteItem(items.id)} style={{ color: "red", cursor: "pointer", border: "none", background: "transparent" }}>
                                                        <i className="fas fa-trash"></i> Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductDetails;









