import React from 'react';

const Aside = () => (
  <aside>
    <nav>
      <ul className="first">
        <li><a href="#"><i className="xi-home-o"></i>대시보드</a></li>
      </ul>
      <h2>상품관리</h2>
      <ul>
        <li><a href="#"><i className="xi-box"></i>등록 신청 상품</a></li>
        <li><a href="#"><i className="xi-gift-o"></i>상품 리스트</a></li>
        <li><a href="#"><i className="xi-book-o"></i>전자책 리스트</a></li>
        <li><a href="#"><i className="xi-file-upload-o"></i>상품 일괄 등록</a></li>
        <li><a href="#"><i className="xi-file-upload-o"></i>상품 일괄 수정</a></li>
        <li><a href="#"><i className="xi-documents-o"></i>카테고리 관리</a></li>
      </ul>
      <h2>판매 관리</h2>
      <ul>
        <li><a href="#"><i className="xi-briefcase"></i>B2B 공급 상품 리스트</a></li>
        <li className="active"><a href="#"><i className="xi-file-upload-o"></i>B2B 공급 관리</a></li>
        <li><a href="#"><i className="xi-file-zip-o"></i>B2B 배포 관리</a></li>
        <li><a href="#"><i className="xi-file-upload"></i>B2BC 공급 관리</a></li>
        <li><a href="#"><i className="xi-file-zip"></i>B2BC 배포 관리</a></li>
      </ul>
      <h2>정산 관리</h2>
      <ul>
        <li><a href="#"><i className="xi-credit-card"></i>자사몰 정산</a></li>
        <li><a href="#"><i className="xi-calculator"></i>매입 정산</a></li>
        <li><a href="#"><i className="xi-wallet"></i>매출 정산</a></li>
      </ul>
      <h2>거래처 관리</h2>
      <ul>
        <li><a href="#"><i className="xi-building"></i>공급처 관리</a></li>
        <li><a href="#"><i className="xi-city"></i>판매처 관리</a></li>
        <li><a href="#"><i className="xi-bank"></i>출판사 관리</a></li>
        <li><a href="#"><i className="xi-market"></i>채널 관리</a></li>
      </ul>
      <h2>시스템</h2>
      <ul>
        <li><a href="#"><i className="xi-users"></i>관리자 리스트</a></li>
        <li><a href="#"><i className="xi-profile-o"></i>정보 수정</a></li>
      </ul>
    </nav>
  </aside>
);

export default Aside;