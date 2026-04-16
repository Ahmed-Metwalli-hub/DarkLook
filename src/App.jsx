import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Child1 from './components/Feature/Child1/Child1'
import Child2 from './components/Feature/Child2/Child2'
import Child3 from './components/Feature/Child3/Child3'
import { Toaster } from 'react-hot-toast';
import { lazy , Suspense } from 'react'
import Lotti from "lottie-react";
import loading from './lottiFile/looder DarkLook.json'
import NotFound from '../error/NotFound'
const  Layout    = lazy(()=> import('./Layout')) 
const  Home    = lazy(()=> import('./components/Home/Home')) 
const Contact     = lazy(()=> import('./components/Contact/Contact')) 
const   Shop   = lazy(()=> import('./components/Shop/Shop')) 
const SingleProPage = lazy(()=> import('./components/SingleProPage/SingleProPage')) 
const Cart = lazy(()=> import('./components/Cart/Cart')) 
const Wishlist = lazy(()=> import('./components/Wishlist/Wishlist')) 
const AboutUs = lazy(()=> import('./components/AboutUs/AboutUs')) 
const SinglePost     = lazy(()=> import('./components/SinglePost/SinglePost')) 
const Blog     = lazy(()=> import('./components/Blog/Blog')) 
function App() {
  const handelLotti = () => (
    <div className='w-100 vh-100 flex'>
      <div className='flex w-75 flex-column  gap-3'>
        <Lotti className='w-25' animationData={loading} loop={true} />
        <p className='fs-5 fw-bold'>Loading...</p>
      </div>
    </div>
  )
  const router = createBrowserRouter([{
    path: '/',
    element: <Suspense fallback={handelLotti()}>
      <Layout/>
    </Suspense>,
    errorElement: <NotFound/>,
    children: [
      {
        path:'',
        element: 
          <Home/>
        ,
        children: [
          {
            path:'',
            element: <Child1/>
        
          },
          {
            path:'child-2',
            element: <Child2/>
        
          },
          {
            path:'child-3',
            element: <Child3/>
        
          }
        ]

      },
      {
        path:'contact',
        element:
          <Contact/>
        
      },
      {
        path:'shop',
        element:<Shop/>
        
        
      }
      ,
      {
        path:'shop/singlepropage/:number',
        element:
          <SingleProPage/>
        ,
        
      }
      ,
      {
        path:'cart',
        element:
          <Cart/>
        ,
        
      }
      ,
      {
        path:'wishlist',
        element:
          <Wishlist/>
        ,
        
      }
      ,
      {
        path:'about',
        element:  
          <AboutUs/>
        ,
        
      }
      ,
      {
        path:'blog',
        element:
          <Blog/>
        ,
        
      }
      ,
      {
        path:'singlePost',
        element:
          <SinglePost/>
        ,
        
      }
    ]
  }])
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
