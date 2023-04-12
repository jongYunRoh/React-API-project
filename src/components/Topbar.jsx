import React from 'react'
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <nav className='Topbar'>
      <ul>
        <li><Link to="Home/">홈</Link></li>
        <li><Link to="/">상세정보</Link></li>
      </ul>
    </nav>
  )
}
