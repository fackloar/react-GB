import React from 'react'
import CustomLink from '../components/customLink/CustomLink'

const NotFound = () => {
  return (
      <div>
          <div>
              <CustomLink to={'/'} >Home</CustomLink>
          </div>

          Похоже вы забрели не туда куда нужно
      </div>
  )
}

export default NotFound