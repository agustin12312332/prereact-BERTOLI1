import React from 'react'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
  return ( 
    <nav className='nav'>
    <h1>nonForsit</h1>
    <section className='buttons'>
        <button>remera</button>
        <button>cap corderoy</button>
        <button>pantalones</button>
    </section>

    <div className='cart'>
    </div>
    < CartWidget />
</nav>
)
}

export default Navbar