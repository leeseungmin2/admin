import React from 'react';

const Sub2 = () => (
  <div id="container">
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
    <div className="inner pdt50">
      <h3 className="h3">
        <span>B2B 공급 관리</span>
      </h3>
      <div className="search-wrap">
        <div className="search1">
          <div className="left">
            <select className="select" style={{ width: '100%' }}>
              <option>판매처명</option>
            </select>
          </div>
          <div className="center">
            <input type="text" className="inp" style={{ width: '100%' }} />
          </div>
          <div className="right">
            <button className="btn-type0" id="BtnCategoryOpen">카테고리</button>
            <button className="btn-type0">검색</button>
          </div>
        </div>
        <div className="search3 type2">
          <div className="tit">기간</div>
          <div><input type="text" className="inp calendar" value="2021-11-12" /></div>
          <div><input type="text" className="inp calendar" value="2021-11-12" /></div>
          <div>
            <label className="mr20"><input type="radio" className="radio" name="ra1" checked /><em></em><span>최근 1년</span></label>
            <label><input type="radio" className="radio" name="ra1" /><em></em><span>전체</span></label>
          </div>
        </div>
        <div className="search4" id="CategorySearch" style={{ display: 'none' }}>
          <div className="col">
            <div className="select-tit">대분류</div>
            <select className="select" multiple>
              <option>전체</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
            </select>
          </div>
          <div className="col">
            <div className="select-tit">중분류</div>
            <select className="select" multiple>
              <option>전체</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
            </select>
          </div>
          <div className="col">
            <div className="select-tit">소분류</div>
            <select className="select" multiple>
              <option>전체</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
            </select>
          </div>
          <div className="col">
            <div className="select-tit">상세1</div>
            <select className="select" multiple>
              <option>전체</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
            </select>
          </div>
          <div className="col">
            <div className="select-tit">상세2</div>
            <select className="select" multiple>
              <option>전체</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
              <option>카테고리명</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-head">
        <div className="left flex center">
          <div className="total mr20">총 <strong>12,345</strong>건</div>
          <button className="btn-type1"><i className="xi-file-add-o"></i> 신규 등록</button>
        </div>
        <div className="right">
          <select className="select">
            <option>15개씩 보기</option>
            <option>30개씩 보기</option>
            <option>50개씩 보기</option>
          </select>
        </div>
      </div>
      <div className="table-type1">
        <table>
          <thead>
            <tr>
              <th>판매처</th>
              <th>담당자</th>
              <th>공급수량</th>
              <th>등록자</th>
              <th>공급상품</th>
              <th>공급일</th>
              <th>기능</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center"><strong>백석대학교</strong></td>
              <td className="text-center">목정훈<br />000-0000-0000<br />bu@naver.com</td>
              <td className="text-center">12</td>
              <td className="text-center">김윤진<br />aba@naver.com</td>
              <td className="text-center"><a href="#" className="btn-type1">다운로드</a></td>
              <td className="text-center">2020-10-10</td>
              <td className="text-center">
                <div className="mb5"><a href="#" className="btn-type0">환불</a></div>
                <div><a href="#" className="btn-type2">삭제</a></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagenate">
        <a href="#" className="prev"><i className="xi-angle-left-thin"></i></a>
        <a href="#" className="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#" className="next"><i className="xi-angle-right-thin"></i></a>
      </div>
    </div>
  </div>
);

export default Sub2;