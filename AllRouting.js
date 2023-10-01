
import {Routes ,Route ,Link } from 'react-router-dom';
import Home from '../Screens/Home' ;
import About from '../Screens/About' ;
import Contacts from '../Screens/Contacts' ;
import Products from '../Screens/Products' ;
//import Allrouting from './Routing/AllRouting';





const Allrouting = ()=>{
    return(
        <>
        <Routes>

            <Route path='/' element = {<Home/>} />
            <Route path='/home' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/contact' element = {<Contacts/>} />
            <Route path='/products' element = {<Products/>} />

        </Routes>

        <h1> <Link to='/home'> Go to Home </Link></h1>
        <h1> <Link to='/about'> Go to About </Link></h1>
        <h1> <Link to='/contact'> Go to Contacts </Link></h1>
        <h1> <Link to='/products'> Go to Products </Link></h1>
        
        
        

        </>
    )
}

export default Allrouting  