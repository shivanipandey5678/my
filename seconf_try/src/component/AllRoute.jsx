import {Routes,Route} from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetaill from '../pages/ProductDetaill'


export default function AllRoute(){
    return(
        <Routes>
            <Route path='/' element={
            <PrivateRoute><Home/></PrivateRoute>}>

            </Route>

            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home/:id' element={<PrivateRoute><ProductDetaill/></PrivateRoute>}></Route>
        </Routes>
    )
}