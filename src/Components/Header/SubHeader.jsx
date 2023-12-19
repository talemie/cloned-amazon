import React from 'react'
import './subHeader.css'
import { Link } from 'react-router-dom'
function SubHeader() {
  return (
      <div className='sub__header'>
          <Link to='#'>
              <div>All</div>
          </Link>
          <div className='lists'>
              <Link to='#'>
                  <div>Last minute Deals</div>
              </Link>
              <Link to='#'>
                  <div>Gift Cards</div>
              </Link>
              <Link to='#'>
                  <div>Medical Care</div>
              </Link>
              <Link to='#'>
                  <div>Groceries</div>
              </Link>
              <Link to='#'>
                  <div>Best Sellers</div>
              </Link>
              <Link to='#'>
                  <div>Amazon Basics</div>
              </Link>
              <Link to='#'>
                  <div>Registry</div>
              </Link>
              <Link to='#'>
                  <div>Today's Deal</div>
              </Link>
              <Link to='#'>
                  <div>Prime</div>
              </Link>
              <Link to='#'>
                  <div>New Releases</div>
              </Link>
          </div>
    </div>
  )
}

export default SubHeader