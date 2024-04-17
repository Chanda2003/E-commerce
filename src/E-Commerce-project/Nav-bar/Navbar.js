


// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import React, { useEffect, useState } from 'react';
// import card from "./cart4.svg"
// import "./Nav-bar.css"
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Table from 'react-bootstrap/Table';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { REMOVE_CART_ITEMS ,CLEAR_ALL} from '../Redux/Action/Action';



// function NavBar() {


//     const [price,setPrice]=useState(0)

//   const getdata=useSelector((state)=>state.ReducerAction.card)

// // console.log(getdata)
// const Back=useNavigate()

// const dispatch=useDispatch()

// const [cartOpen, setCartOpen] = useState(false);

// const toggleCart = () => {
//   setCartOpen(!cartOpen);
// };

// const closeCart = () => {
//   setCartOpen(false);
// };

// const del=(id)=>{
//   dispatch( REMOVE_CART_ITEMS(id))
// }


// const total=()=>{
//   let Price=0
//   getdata.map((ele,k)=>{
//    Price=ele.price * ele.quantity+Price
//   })
//   setPrice(Price)
// }

// useEffect(()=>{
//   total()
// },[total])

//   return (
//     <Navbar expand="lg"  bg="light"  variant="light">
//       <Container>
//         <Navbar.Brand><Link to={"/"} className='link' >Shop Now</Link></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link ><Link to={"/"} className='link'>Home</Link></Nav.Link> 
//             <Nav.Link ><Link to={"/products"} className='link'>Products</Link></Nav.Link>          
//             <NavDropdown title="Category" id="basic-nav-dropdown" className='link ' >
//               <NavDropdown.Item ><Link to={"/products/Smartphones"} className='link' style={{color:"black",fontSize:"15px"}}>Smart Phone</Link></NavDropdown.Item>
//               <NavDropdown.Item ><Link to={"/products/Laptops"} className='link' style={{color:"black",fontSize:"15px"}}>Laptops</Link></NavDropdown.Item>
//               <NavDropdown.Item><Link to={"/products/fragrances"} className='link' style={{color:"black",fontSize:"15px"}}>Fragrances</Link></NavDropdown.Item>
//               <NavDropdown.Item ><Link to={"/products/Skincare"} className='link' style={{color:"black",fontSize:"15px"}}>Skincare</Link></NavDropdown.Item>
//             </NavDropdown>
//             {/* <Nav.Link ><Link to={"/products"} className='link'>Products</Link></Nav.Link> */}
//            <Dropdown onToggle={toggleCart} show={cartOpen} className='Dropdownn'>
//             <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginBottom:"20px",marginLeft:"120px"}} >
//        <img className='img' src={card} alt='card' ></img><Badge bg="secondary">{getdata.length}</Badge>
//        {/* <div><i class="fa-solid fa-cart-plus" style={{fontSize:"20px"}}></i><Badge bg="secondary">{getdata.length}</Badge> </div>   style={{color:"black",backgroundColor:"black"}}  */}
//       </Dropdown.Toggle>
//       <Dropdown.Menu  >
//         <div >
//            {
//           getdata.length
//           ?
//           <div className='card_details'style={{width:"340px",padding:10}}  >
//             <Table >
//               <thead>
//                 <tr>
//                   <th>Photo</th>
//                   <th>Details</th>
                 
//                 </tr>
//               {/* <tr></tr> */}
//               </thead>           
//               <tbody>
//                 {
//                   getdata.map((eachobject)=>{
//                     return(
//                       < React.Fragment key={eachobject.id}>
//                       <tr >
//                        <td >
//                        <Link to={`/productdetails/${eachobject.id}`} > <img src={eachobject.images[0]} alt='Card' style={{height:"90px",width:"90px"}}></img>   </Link>
//                   </td>
//                   <td >
//                  <p> <strong>Brand</strong> : {eachobject.brand} </p>
//                  <p> <strong>Category</strong> : {eachobject.category} </p>
//                  <p> <strong>Price</strong> : ₹ {eachobject.price} </p>
//                  <p> <strong>Quantity</strong> : {eachobject.quantity}</p>
//                  <p style={{color:"red",cursor:"pointer",fontSize:20}} onClick={()=>del(eachobject.id)} > <i className='fas fa-trash ' ></i></p>
//                 </td>
//                 </tr>
//                       </React.Fragment>
//                     )
//                   })
//                 }
//                 <p><strong>Total</strong> : ₹ {price}</p>
//                 {/* <button onClick={del1}>Buy Now</button> */}
//                 <Link to={"/productdetails/buy"}><button>Buy Now</button></Link>
//               </tbody>
//             </Table>
//             </div>
//             :
//             <div>
//             <Button variant="light" className="close-button" onClick={closeCart}> <i className="fas fa-close smallclose" style={{cursor:"pointer",fontWeight:"bold"}} ></i></Button>
//             <p>Your card is empty</p>
//             </div>
//         }
//         </div>
//       </Dropdown.Menu>
//     </Dropdown>
         
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import card from "./cart4.svg";
import "./Nav-bar.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_CART_ITEMS, CLEAR_ALL } from '../Redux/Action/Action';

function NavBar() {
    const [price, setPrice] = useState(0);
    const getData = useSelector((state) => state.ReducerAction.card);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const closeCart = () => {
        setCartOpen(false);
    };

    const deleteItem = (id) => {
        dispatch(REMOVE_CART_ITEMS(id));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        getData.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        setPrice(totalPrice);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [calculateTotalPrice]);

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="navbar-container">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="navbar-link">Shop Now</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to="/" className="navbar-link">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/products" className="navbar-link">Products</Link>
                        </Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown" className="navbar-link">
                            <NavDropdown.Item>
                                <Link to="/products/Smartphones" className="dropdown-link">Smart Phone</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/products/Laptops" className="dropdown-link">Laptops</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/products/fragrances" className="dropdown-link">Fragrances</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/products/Skincare" className="dropdown-link">Skincare</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Dropdown onToggle={toggleCart} show={cartOpen} className="dropdown">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="dropdown-toggle">
                                <img className="cart-icon" src={card} alt="card" />
                                <Badge bg="secondary">{getData.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu">
                                {getData.length ? (
                                    <div className="card-details">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Photo</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {getData.map((item) => (
                                                    <React.Fragment key={item.id}>
                                                        <tr>
                                                            <td>
                                                                <Link to={`/productdetails/${item.id}`}>
                                                                    <img src={item.images[0]} alt="Card" className="item-photo" />
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <p><strong>Brand:</strong> {item.brand}</p>
                                                                <p><strong>Category:</strong> {item.category}</p>
                                                                <p><strong>Price:</strong> ₹{item.price}</p>
                                                                <p><strong>Quantity:</strong> {item.quantity}</p>
                                                                <p className="delete-icon" onClick={() => deleteItem(item.id)}>
                                                                    <i className='fas fa-trash'></i>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                ))}
                                                <tr>
                                                    <td colSpan="2"><strong>Total:</strong> ₹{price}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2">
                                                        <Link to="/productdetails/buy">
                                                            <button className="buy-now-button">Buy Now</button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                ) : (
                                    <div>
                                        <Button variant="light" className="close-button" onClick={closeCart}>
                                            <i className="fas fa-close smallclose"></i>
                                        </Button>
                                        <p>Your cart is empty</p>
                                    </div>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;












