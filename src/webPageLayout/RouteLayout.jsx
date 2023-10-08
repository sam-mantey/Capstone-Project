import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function RouteLayout() {
  return (
    <div>
        <Nav />
        {/* Outlet displays the content of the various pages */}
        <Outlet />

        <Footer />
    </div>
  )
}
