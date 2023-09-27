import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav'

export default function RouteLayout() {
  return (
    <div>
        <Nav />
        {/* Outlet displays the content of the various pages */}
        <Outlet />
    </div>
  )
}
