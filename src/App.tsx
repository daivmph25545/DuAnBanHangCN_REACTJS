import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import Homepage from './pages/home'
import AdminLayout from './components/layout/adminLayout'
import Signup from './pages/signup'
import Signin from './pages/signin'
import DetailLayout from './components/layout/detailLayout'
import Adminpage from './pages/admin'
import ProductUpdate from './pages/product-update'
import ProductAdd from './pages/product-add'




// 1. Khai bao router

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path='product/:id' element={<DetailLayout />} />

      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Adminpage />} />
        <Route path='product/:id' element={<ProductUpdate/>}/>
        <Route path='product-add' element={<ProductAdd/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
