import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {

    

  return (
    <div>
      <h1>Item List</h1>
      <li><Link to='/items/1'>Item 1</Link></li>
      <br />
      <li><Link to='/items/2'>Item 2</Link></li>
      <br />
      <li><Link to='/items/3'>Item 3</Link></li>
    </div>
  )
}

export default Home
