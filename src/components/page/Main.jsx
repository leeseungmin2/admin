import React, { useState } from 'react';
import Aside from '../layout/Aside';
import RadioLabel from '../ui/RadioLabel';

const Main = () => {
  const [radioValue, setRadioValue] = useState('recent');

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div id="container">
      <Aside></Aside>
      <div className="inner pdt50">
        <h3 className="h3">
          <span>메인 페이지</span>
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
              <RadioLabel
                name="ra1"
                value="recent"
                checked={radioValue === 'recent'}
                onChange={handleRadioChange}
                label="최근 1년"
                withSpan={true}
              />
              <RadioLabel
                name="ra1"
                value="all"
                checked={radioValue === 'all'}
                onChange={handleRadioChange}
                label="전체"
                withSpan={true}
              />
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
};

export default Main;