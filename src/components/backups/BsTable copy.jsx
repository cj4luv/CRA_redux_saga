/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const BsTable = () => (
  <Table className="order-table table mb-0" style={{ minWidth: 680 }}>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              디지털/가전
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input2" defaultValue="마이크로소프트 Window 10 OS" />
        </td>
        <td>45,000원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">62</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-success" style={{ width: 48 }}>안정</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              패션/의류
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input3" defaultValue="AOS 하이 웨스트" />
        </td>
        <td>13,500원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">184</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-danger" style={{ width: 48 }}>부족</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              생활/가전
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input4" defaultValue="수면 안대 실크 프리미엄" />
        </td>
        <td>32,800원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">84</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-info" style={{ width: 48 }}>주문중</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              생활/가전
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input5" defaultValue="스마트 체중계" />
        </td>
        <td>52,000원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">62</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-success" style={{ width: 48 }}>안정</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              패션/의류
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input6" defaultValue="라이트웨이트 자켓" />
        </td>
        <td>72,000원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">62</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-success" style={{ width: 48 }}>안정</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              디지털/가전
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input7" defaultValue="마이크로소프트 Window 10 OS" />
        </td>
        <td>45,000원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">62</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-success" style={{ width: 48 }}>안정</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              패션/의류
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input8" defaultValue="AOS 하이 웨스트" />
        </td>
        <td>13,500원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">184</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-danger" style={{ width: 48 }}>부족</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
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
          <Button
            className="btn text-left btn-dark btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              패션/의류
          </Button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">디지털/가전</a>
            <a className="dropdown-item" href="#">패션/의류</a>
            <a className="dropdown-item" href="#">생활/가전</a>
          </div>
        </td>
        <td>
          <input type="text" className="form-control text-light" id="input9" defaultValue="AOS 하이 웨스트" />
        </td>
        <td>13,500원</td>
        <td>
          <div className="d-flex">
            <div className="col-5 p-0 pr-3 text-right">
              <span className="d-inline-block align-middle">184</span>
            </div>
            <div>
              <div>
                <span className="badge badge-pill badge-danger" style={{ width: 48 }}>부족</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="btn-group">
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter">
              <span className="glyphicons-outline_delete" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
            <Button type="button" className="btn btn-ghost-primary icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">add</span>
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default BsTable;
