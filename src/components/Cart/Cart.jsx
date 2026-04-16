import React, { useContext } from 'react'
import './Cart.css'
import { spcificCategory } from '../../Context/ProductJson';
import { ApiContext } from '../../Context/ApiContext';
import img from "../../assets/images/left1.jpg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CartContext } from '../../Context/CartContext';

function Cart() {
  const { allCatigories, NormalProductCategory, ApiProductCategory } = useContext(ApiContext);  
  const { cart , deleteFromCart , changeAmount, totalCart , clearCart } = useContext(CartContext);
 const cartItems = cart?.map((val , index) => (

    <tr key={index}>
      <th className='bg-black border border-1 text-light' scope="row"><img src={val.img || val.thumbnail} alt="Product Image" className="card-img" style={{width:'50px'}} /></th>
      <td className='bg-black border border-1 text-light'>{val.category}</td>
      <td className='bg-black border border-1 text-light'>{val.title}</td>
      <td className='bg-black border border-1 text-light'><input onChange={(e) => changeAmount(e, val)} className='p-1  ps-2 m-0 w-25' type="number" min={1} max={50} defaultValue={val.amount} /> <button onClick={()=>deleteFromCart(val)} className='btn m-0 fs-6 fw-bold text-center align-middle  flex btn-danger'><IoIosCloseCircleOutline /></button></td>
      <td className='bg-black border border-1 text-light'>$ {val.price.toFixed(2)}</td>
      <td className='bg-black border border-1 text-light'>$ {(val.price * val.amount).toFixed(2)}</td>
    </tr>
  ));
  return (
  <div className='Cart container '>
      <div className="row">

        <div className="col-lg-3 col-md-12 justify-content-start d-flex flex-column gap-2">
        
                  <div className=" my-5">
                    <img src={img} alt="" />
                  </div>
        </div>
        <div className="col-lg-9 col-md-12">
          <table className=" table border border-1 mt-5 text-center align-middle ">
                <thead>
                  <tr>
                    <th className='bg-black border border-1 text-light' scope="col">Image</th>
                    <th className='bg-black border border-1 text-light' scope="col">Category</th>
                    <th className='bg-black border border-1 text-light' scope="col">Product Name</th>
                    <th className='bg-black border border-1 text-light' scope="col">Quantity</th>
                    <th className='bg-black border border-1 text-light' scope="col">Unit Price</th>
                    <th className='bg-black border border-1 text-light' scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? <tr><td colSpan="7" className='text-center p-5 fs-1 text-danger bg-black'>Your Cart Is Empty</td></tr> : 

                  cartItems
                  }
                </tbody>
              </table>
              {cart.length > 0 && (
                <button onClick={clearCart} className='btn w-25 px-2 py-2 rounded-0  fs-6 fw-fw-medium btn-danger'>Remove All Products</button>
              )}
              {cart.length > 0 && (
                <div className='w-100 flex mt-5'>

                <div  className='w-50 totalCart p-3 flex justify-content-between '>
                  <div>Totall cart :</div>
                  <div>$ {totalCart}</div>
                </div>
              </div>
              )}
        </div>

      
    </div>
  </div>
  )
}

export default Cart
