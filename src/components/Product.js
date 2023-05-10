import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <>
    <div>Product</div>
    <Link to='/featured'>featured</Link>
    <Link to='/new'>new</Link>
    <Outlet/>
    </>
  )
}
