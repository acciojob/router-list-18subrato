import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {

    

  return (
    <div>
      <h1>Item List</h1>
      <Link to='/items/1'>Item 1</Link>
      <br />
      <Link to='/items/2'>Item 2</Link>
      <br />
      <Link to='/items/3'>Item 3</Link>
    </div>
  )
}

export default Home
