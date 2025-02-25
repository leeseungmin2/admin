import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <div className="header1">
    <div className="inner">
      <h1><Link to="/">BOOXEN eBOOK CMS</Link></h1>
      <div className="menu">
        <a href="#" className="btn-txt">홍길동(abc@booxen.com)</a>
        <Link to="/Sub1" className="btn-link">Sub1</Link>
        <Link to="/Sub2" className="btn-link">Sub2</Link>
        <a href="#" className="btn-link">정보수정</a>
        <a href="#" className="btn-link">로그아웃</a>
      </div>
    </div>
  </div>
);

export default Header;