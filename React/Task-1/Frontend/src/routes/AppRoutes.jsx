import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'
import Product from '../pages/Product'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/User' element={<User />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/About' element={<About />} />
        </Routes>
    )

}

export default AppRoutes