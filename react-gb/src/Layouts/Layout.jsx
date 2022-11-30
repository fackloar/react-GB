import React from 'react'
import {Outlet} from 'react-router-dom'
import CustomLink from '../components/customLink/CustomLink'

const SiteLayout = () => {
  return (
      <>
          <header>
              <CustomLink to={'/chat'}>Home</CustomLink>
              <CustomLink to={'/chat'}>Chat</CustomLink>
              <CustomLink to={'/profile'}>Profile</CustomLink>
              <CustomLink to={'/counter'}>Counter</CustomLink>
          </header>

          <main><Outlet/></main>
      </>
  )
}

export default SiteLayout
