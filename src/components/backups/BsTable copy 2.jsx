/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Button, Dropdown } from 'react-bootstrap';


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
          <Dropdown>
            <Dropdown.Toggle
              className="btn text-left btn-dark btn-md dropdown-toggle"
              variant="success"
            >
              디지털/가전
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-item" href="#/action-1">디지털/가전</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#/action-2">패션/의류</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#/action-3">생활/가전</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

    </tbody>
  </Table>
);

export default BsTable;
