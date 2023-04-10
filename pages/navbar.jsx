import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { MdWallet } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'


function Navbar() {
  return (
    <>

      <div className="navbar">
        <div className="company_logo_name">
          <div className="brandLogo" style={{
            backgroundImage: `url("https://opensea.io/static/images/logos/opensea.svg")`,
            height: '33px',
            width: '33px',
            backgroundSize: 'cover'
          }}>
          </div>
          <div className="CompanyName" style={{
            fontWeight: 'bolder',
            fontSize: '10px',
            fontFamily: 'sans-serif',
            marginLeft: '10px',
            marginRight: '18px'
          }}>
            <h1>OpenSea</h1>
          </div>
        </div>
        <div className="navItems" >
          <ul>
            <li>Drops</li>
            <li>Stats</li>
          </ul>
        </div>
        <div className="searchBar">
          <input type="text" placeholder='Search items,collections,and accounts' />
        </div>
        <div className="walletLogin">
          <div className="walletText">
            <MdWallet style={{fontSize:"20px",color:'rgb(53, 56, 64)'}}/>
            <h5>Connect wallet</h5>
          </div>
          <div className="login">
            <BiUserCircle style={{fontSize:"20px",color:'rgb(53, 56, 64)'}}/>
          </div>
        </div>
        <div className="cart">
          <MdOutlineShoppingCart style={{fontSize:"20px",color:'rgb(53, 56, 64)'}}/>
        </div>
      </div>
    </>
  )
}

export default Navbar