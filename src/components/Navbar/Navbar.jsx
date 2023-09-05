import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {
  const { categoryId } = useParams();

  return ( 
    <nav className='nav'>
      <Link to = "/"><h1>nonForsit</h1></Link>
      <section className='buttons'>
        <Link to={`/category/remeras`}>
          <button>remera</button>
        </Link>
        <Link to={`/category/gorras`}>
          <button>cap corderoy</button>
        </Link>
        <Link to={`/category/pants`}>
          <button>pantalones</button>
        </Link>
        
      </section>
      <div className='cart'></div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;