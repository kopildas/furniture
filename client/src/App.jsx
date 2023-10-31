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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-auto flex flex-col  bg-white">
      <Router>
        {/* <Cursor scaling={scaling}/> */}
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<PrivateAdminRoute/>}>
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/products/addproducts" element={<AddProducts/>} />
        </Route>
        </Routes>
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
