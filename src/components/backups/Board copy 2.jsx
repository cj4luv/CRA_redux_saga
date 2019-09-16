/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Board = () => (
  <div className="theme-body">
    <div className="theme-sidebar">
      <div className="sidebar-area">
        <nav className="theme-sidebar-nav">
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#" className="nav-link nav-first-link nav-dropdown-toggler dropdown">
                <span className="glyphicons-home" aria-hidden="true" />
                    대시보드
                <span className="badge badge-pill badge-success">10</span>
              </a>
              <ul className="nav-dropdown-items nav-dropdown">
                <li>
                  <a href="#" className="nav-link nav-dropdown-toggler dropdown">대시보드</a>
                  <ul className="nav-dropdown-items nav-dropdown">
                    <li>
                      <a href="#" className="nav-link">화면</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">화면</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link">대시보드</a>
                </li>
                <li>
                  <a href="#" className="nav-link">대시보드</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-first-link active current">
                <span className="glyphicons-text" aria-hidden="true" />
                    주문 관리
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-first-link nav-dropdown-toggler dropdown">
                <span className="glyphicons-store" aria-hidden="true" />
                    서비스 관리
                <span className="badge badge-pill badge-primary">2</span>
              </a>
              <ul className="nav-dropdown-items nav-dropdown">
                <li>
                  <a href="#" className="nav-link">화면</a>
                </li>
                <li>
                  <a href="#" className="nav-link">화면</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-first-link undropdown">
                <span className="glyphicons-user" aria-hidden="true" />
                    고객 관리
                <span className="badge badge-pill badge-info">5</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-first-link">
                <span className="glyphicons-chart_bar" aria-hidden="true" />
                    리포트
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a href="#" className="nav-link nav-first-link undropdown">
                <span className="glyphicons-notification" aria-hidden="true" />
                    알람
                <span className="badge badge-pill badge-danger">3</span>
              </a>
            </li>
            <li className="nav-item d-md-none">
              <span className="nav-state undropdown">
                <span className="glyphicons-internet" aria-hidden="true" />
                    온라인 상태
                <div className="custom-control custom-switch switch-only d-inline-block">
                  <input type="checkbox" className="custom-control-input" checked="" id="customSwitchIcon1" />
                  <label className="custom-control-label" htmlFor="customSwitchIcon1"><span className="sr-only">Toggle this switch element</span></label>
                </div>
              </span>
            </li>
            <li className="nav-item d-md-none">
              <a href="#" className="nav-link nav-first-link">
                <span className="glyphicons-setting" aria-hidden="true" />
                    프로필 설정
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a href="#" className="nav-link nav-first-link">
                <span className="glyphicons-logout" aria-hidden="true" />
                    로그아웃
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <main className="theme-contents contents-mt">
      <div className="row flex-column flex-md-row justify-content-md-between align-items-md-center mb-6 no-gutters">
        <div className="order-md-2">
          <ol className="breadcrumb mb-0 p-0 bg-transparent">
            <li className="breadcrumb-item"><a href="#">홈</a></li>
            <li className="breadcrumb-item active" aria-current="page">라이브러리</li>
          </ol>
        </div>
        <div className="order-md-1 mt-3 mt-md-0">
          <div className="h2 font-weight-normal mb-0">주문관리</div>
        </div>
      </div>
      <div className="list d-flex justify-content-xl-between flex-xl-row flex-md-column flex-column mb-3">
        <div className="btn-toolbar mb-xl-0 col-md-12 col-xl-9 p-0">

          <div className="btn-group col-12 col-md-6 col-xl-4 mb-2 p-0" style="min-width:305px; height: 38px;">
            <div className="d-flex col-12 align-items-center border border-dark rounded-lg p-0 bg-neo">
              <div className="input-group float-left mr-1" style="width:50%;">
                <input
                  type="text"
                  className="form-control start-date pr-0 bg-neo border-0 text-white"
                  placeholder="YYYY/MM/DD"
                />
                <span className="ml-1 mr-2">
                  <span className="g-transparent bg-neo border-0 d-table h-100">
                    <i
                      className="glyphicons-outline_calendar d-table-cell align-middle"
                      style="font-size:1.25rem; color:#aaaaaf;"
                    />
                  </span>
                </span>
              </div>
              <div className="float-left text-center" style="width:2%;">
                <div className="mx-auto" style="width:15%; height:1px; background-color:#c7c7cc; min-width:12px;" />
              </div>
              <div className="input-group float-left" style="width:50%;">
                <input
                  type="text"
                  className="form-control end-date pr-0 bg-neo border-0 text-white"
                  placeholder="YYYY/MM/DD"
                />
                <span className="ml-1 mr-2">
                  <span className="g-transparent border-0 d-table h-100">
                    <i
                      className="glyphicons-outline_calendar d-table-cell align-middle"
                      style="font-size:1.25rem; color:#aaaaaf;"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="btn-group mb-2 col-6 col-sm-6 col-md-1 p-0" style="min-width: 96px;">
            <button
              className="btn btn-outline-dark btn-md pl-3 pr-3 dropdown-toggle text-left w-100 bg-neo"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
                  최신순
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">최신 순</a>
              <a className="dropdown-item" href="#">가격 순</a>
              <a className="dropdown-item" href="#">재고 순</a>
            </div>
          </div>

          <div className="btn-group mb-2 col-6 col-sm-6 col-md-1 p-0" style="min-width: 82px;">
            <button
              className="btn btn-outline-dark btn-md dropdown-toggle text-left w-100 bg-neo"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
                  메뉴
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">메뉴1</a>
              <a className="dropdown-item" href="#">메뉴2</a>
              <a className="dropdown-item" href="#">메뉴3</a>
            </div>
          </div>

          <form className="form-search form-inline mb-2 col-md-6 col-xl-4 p-0">
            <div className="custom-search w-100">
              <input type="search" className="form-control w-100 text-white" aria-describedby="검색" placeholder="검색" />
            </div>
            <button type="button" className="form-search-cancel"><i className="glyphicons-cancel" /></button>
          </form>
        </div>

        <div className="d-flex justify-content-end justify-content-md-end">
          <div className="list-before-checked">
            <button type="button" className="btn btn-dark icon-only">
                  상품추가
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">ADD</span>
            </button>
          </div>
          <div className="list-after-checked">
            <span className="d-flex align-items-center mr-3">
              <span className="countChecked">0</span>
개 선택됨
            </span>
            <button type="button" className="btn btn-light mr-2">취소</button>
            <button type="button" className="btn btn-primary">삭제</button>
          </div>
        </div>
      </div>
      <div className="table-responsive mb-4 mb-md-7 uxs-check-all-container">
        <table className="order-table table mb-0" style="min-width: 680px;">
          <colgroup>
            <col />
            <col />
            <col style="width:200px" />
            <col />
            <col style="width:100px" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all" id="checkAll" />
                  <label className="custom-control-label" htmlFor="checkAll"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </th>
              <th scope="col">#</th>
              <th scope="col">카테고리</th>
              <th scope="col">카테고리</th>
              <th scope="col">가격</th>
              <th scope="col" className="text-center">재고</th>
              <th scope="col">편집</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem1" />
                  <label className="custom-control-label" htmlFor="checkItem1"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">1</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      디지털/가전
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input2" value="마이크로소프트 Window 10 OS" />
              </td>
              <td>45,000원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">62</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-success" style="width: 48px;">안정</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem2" />
                  <label className="custom-control-label" htmlFor="checkItem2"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">2</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      패션/의류
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input3" value="AOS 하이 웨스트" />
              </td>
              <td>13,500원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">184</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-danger" style="width: 48px;">부족</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem3" />
                  <label className="custom-control-label" htmlFor="checkItem3"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">4</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      생활/가전
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input4" value="수면 안대 실크 프리미엄" />
              </td>
              <td>32,800원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">84</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-info" style="width: 48px;">주문중</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem4" />
                  <label className="custom-control-label" htmlFor="checkItem4"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">5</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      생활/가전
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input5" value="스마트 체중계" />
              </td>
              <td>52,000원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">62</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-success" style="width: 48px;">안정</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem5" />
                  <label className="custom-control-label" htmlFor="checkItem5"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">6</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      패션/의류
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input6" value="라이트웨이트 자켓" />
              </td>
              <td>72,000원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">62</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-success" style="width: 48px;">안정</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem6" />
                  <label className="custom-control-label" htmlFor="checkItem6"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">7</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      디지털/가전
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input7" value="마이크로소프트 Window 10 OS" />
              </td>
              <td>45,000원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">62</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-success" style="width: 48px;">안정</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem7" />
                  <label className="custom-control-label" htmlFor="checkItem7"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">8</th>
              <td>
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      패션/의류
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input8" value="AOS 하이 웨스트" />
              </td>
              <td>13,500원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">184</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-danger" style="width: 48px;">부족</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox icon-only">
                  <input type="checkbox" className="custom-control-input uxs-check-all-item" id="checkItem9" />
                  <label className="custom-control-label" htmlFor="checkItem9"><span className="sr-only">Check this custom checkbox</span></label>
                </div>
              </td>
              <th scope="row">9</th>
              <td className="position-relative">
                <button
                  className="btn text-left btn-dark btn-md dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                      패션/의류
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">디지털/가전</a>
                  <a className="dropdown-item" href="#">패션/의류</a>
                  <a className="dropdown-item" href="#">생활/가전</a>
                </div>
              </td>
              <td>
                <input type="text" className="form-control text-light" id="input9" value="AOS 하이 웨스트" />
              </td>
              <td>13,500원</td>
              <td>
                <div className="d-flex">
                  <div className="col-5 p-0 pr-3 text-right">
                    <span className="d-inline-block align-middle">184</span>
                  </div>
                  <div>
                    <div>
                      <span className="badge badge-pill badge-danger" style="width: 48px;">부족</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="btn-group">
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="glyphicons-outline_delete" aria-hidden="true" />
                    <span className="sr-only">delete</span>
                  </button>
                  <button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
                    <span className="glyphicons-add" aria-hidden="true" />
                    <span className="sr-only">add</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex position-relative justify-content-between align-items-md-center flex-column flex-md-row">
        <div className="d-flex align-items-center mb-3">
          <div className="mr-3">
            <div className="dropdown">
              <button
                className="btn btn-outline-dark dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                    13
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">10</a>
                <a className="dropdown-item" href="#">13</a>
                <a className="dropdown-item" href="#">14</a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-white-38">1-13 / 300</span>
          </div>
        </div>
        <ul className="pagination mb-3 justify-content-sm-center justify-content-center">
          <li className="page-item"><a className="page-link" href="#">이전</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">다음</a></li>
        </ul>
        <button
          type="button"
          className="btn btn-outline-dark mb-3 justify-content-sm-center d-none d-md-block"
          data-toggle="modal"
          data-target="#printPopup"
        >
인쇄

        </button>
      </div>

    </main>
  </div>
);

export default Board;
