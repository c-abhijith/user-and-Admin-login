import React from 'react'

function Footer() {
    const style={
        backgroundColor:"gray",
        padding:"20px",
        position:"fixed",
        left:"0",
        bottom:"0",
        height:"60px",
        width:"100%"
    }
  return (
    <div style={style} className='app-footer text-center'>
        Copyright .in .ALL
    </div>
  )
}

export default Footer