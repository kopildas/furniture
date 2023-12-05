import { useState } from 'react'

import './App.css'
import Header from './component/Header/Header'
import { BrowserRouter as Router,
  Routes,
  Route,
  useLocation, } from 'react-router-dom'
  import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'
import Login from './pages/SignInUp/Login'
import Signin from './pages/SignInUp/Signin'
import PrivateAdminRoute from './component/Header/PrivateAdminRoute';
import Dashboard from './pages/Admin/Dashboard';
import AddProducts from './pages/Admin/AddProducts';
import All_Products from './pages/Admin/All_Products';
import EditProduct from './component/Admin_Comp/EditProduct';
import Users from './pages/Admin/Users';
import SingleItem from './pages/Shop/SingleItem';
import Footer from './component/Footer/Footer';
import { useStateValue } from './context/StateProvider';
import CartContainer from './component/Home/CartContainer';
import ViewCart from './pages/Shop/ViewCart';
import Account from './pages/Account/Account';
import Showroom from './pages/Showroom/Showroom';

function App() {
  const [count, setCount] = useState(0)
  const [{ product,cartShow, user, shop_category }, dispatch] = useStateValue();

  return (
    <>
      <div className="w-screen h-auto flex flex-col  bg-white">
      <Router>
        {/* <Cursor scaling={scaling}/> */}
        <Header />
        {cartShow && <CartContainer />}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="/singleitem/:id" element={<SingleItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />

        <Route path="/admin" element={<PrivateAdminRoute/>}>
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/products" element={<All_Products/>} />
          <Route path="/admin/products/addproducts" element={<AddProducts/>} />
          <Route path="/admin/products/addproducts/edit" element={<EditProduct/>} />
          <Route path="/admin/users" element={<Users/>} />
        </Route>
        </Routes>
        <Footer/>
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      </div>
    </>
  )
}

export default App
