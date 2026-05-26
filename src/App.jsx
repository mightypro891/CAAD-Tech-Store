import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import ErrorBoundary from './components/ErrorBoundary'

import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Roadmap from './pages/Roadmap'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/Admin/Dashboard'
import AdminProducts from './pages/Admin/Products'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='contact' element={<Contact />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='about' element={<About />} />
            <Route path='roadmap' element={<Roadmap />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            <Route path='admin'>
              <Route index element={<AdminDashboard />} />
              <Route path='products' element={<AdminProducts />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
