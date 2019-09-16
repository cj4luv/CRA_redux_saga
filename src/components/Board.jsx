import React from 'react';
import {
  Button, Dropdown, Form, Breadcrumb, InputGroup, ButtonGroup, ButtonToolbar, Row, Table,
} from 'react-bootstrap';

import BsTable from './BsTable';
import BsPagination from './BsPagination';

const Board = () => (
  <div className="theme-body">
    {/* theme-contents */}
    <main className="theme-contents contents-mt">
      <Row className="flex-column flex-md-row justify-content-md-between align-items-md-center mb-6 no-gutters">
        <div className="order-md-2">
          <Breadcrumb className="mb-0 p-0 bg-transparent">
            <Breadcrumb.Item>홈</Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">라이브러리</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="order-md-1 mt-3 mt-md-0">
          <div className="h2 font-weight-normal mb-0">주문관리</div>
        </div>
      </Row>
      {/* list toolbar */}
      <div className="list d-flex justify-content-xl-between flex-xl-row flex-md-column flex-column mb-3">
        <ButtonToolbar className="mb-xl-0 col-md-12 col-xl-9 p-0">

          <ButtonGroup className="col-12 col-md-6 col-xl-4 mb-2 p-0" style={{ minWidth: 305, height: 38 }}>
            <div className="d-flex col-12 align-items-center border border-dark rounded-lg p-0 bg-neo">
              <InputGroup className="float-left mr-1" style={{ width: '50%' }}>
                <Form.Control
                  type="text"
                  className="start-date pr-0 bg-neo border-0 text-white"
                  placeholder="YYYY/MM/DD"
                />
                <span className="ml-1 mr-2">
                  <span className="g-transparent bg-neo border-0 d-table h-100">
                    <i
                      className="glyphicons-outline_calendar d-table-cell align-middle"
                      style={{ fontSize: '1.25rem', color: '#aaaaaf' }}
                    />
                  </span>
                </span>
              </InputGroup>
              <div className="float-left text-center" style={{ width: '2%' }}>
                <div
                  className="mx-auto"
                  style={{
                    width: '15%',
                    height: 1,
                    backgroundColor: '#c7c7cc',
                    minWidth: 12,
                  }}
                />
              </div>
              <InputGroup className="float-left" style={{ width: '50%' }}>
                <Form.Control
                  type="text"
                  className="end-date pr-0 bg-neo border-0 text-white"
                  placeholder="YYYY/MM/DD"
                />
                <span className="ml-1 mr-2">
                  <span className="g-transparent border-0 d-table h-100">
                    <i
                      className="glyphicons-outline_calendar d-table-cell align-middle"
                      style={{ fontSize: '1.25rem', color: '#aaaaaf' }}
                    />
                  </span>
                </span>
              </InputGroup>
            </div>
          </ButtonGroup>

          <Dropdown className="btn-group mb-2 col-6 col-sm-6 col-md-1 p-0" style={{ minWidth: 96 }}>
            <Dropdown.Toggle
              className="btn btn-outline-dark btn-md pl-3 pr-3 dropdown-toggle text-left w-100 bg-neo"
              variant="success"
            >
              최신순
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-item" href="#/action-1">최신 순</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#/action-2">가격 순</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#/action-3">재고 순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="btn-group mb-2 col-6 col-sm-6 col-md-1 p-0" style={{ minWidth: 82 }}>
            <Dropdown.Toggle
              className="btn btn-outline-dark btn-md dropdown-toggle text-left w-100 bg-neo"
              variant="success"
            >
              메뉴
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-item" href="#/action-1">메뉴1</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#/action-2">메뉴2</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#/action-3">메뉴3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form className="form-search form-inline mb-2 col-md-6 col-xl-4 p-0">
            <Form.Group className="custom-search w-100">
              <Form.Control type="search" className="form-control w-100 text-white" aria-describedby="검색" placeholder="검색" />
            </Form.Group>
            <Button type="button" className="form-search-cancel"><i className="glyphicons-cancel" /></Button>
          </Form>

        </ButtonToolbar>

        <div className="d-flex justify-content-end justify-content-md-end">
          <div className="list-before-checked">
            <Button type="button" variant="dark" className="icon-only">
              상품추가
              <span className="glyphicons-add" aria-hidden="true" />
              <span className="sr-only">ADD</span>
            </Button>
          </div>
          <div className="list-after-checked">
            <span className="d-flex align-items-center mr-3">
              <span className="countChecked">0</span>
                개 선택됨
            </span>
            <Button variant="light" className="mr-2">취소</Button>
            <Button>삭제</Button>
          </div>
        </div>
      </div>

      {/* /list toolbar */}
      <Table responsive className="mb-4 mb-md-7 uxs-check-all-container">
        <BsTable />
      </Table>

      <div className="d-flex position-relative justify-content-between align-items-md-center flex-column flex-md-row">
        <div className="d-flex align-items-center mb-3">
          <div className="mr-3">

            <Dropdown>
              <Dropdown.Toggle
                className="btn btn-outline-dark dropdown-toggle"
                style={{ backgroundColor: 'rgb(18, 18, 18)' }}
              >
                13
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="dropdown-item" href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#/action-2">13</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#/action-3">14</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
          <div>
            <span className="text-white-38">1-13 / 300</span>
          </div>
        </div>

        <BsPagination />

        <Button
          type="button"
          className="btn btn-outline-dark mb-3 justify-content-sm-center d-none d-md-block"
          data-toggle="modal"
          data-target="#printPopup"
          style={{ backgroundColor: 'rgb(18, 18, 18)' }}
        >
          인쇄
        </Button>
      </div>

    </main>
  </div>
);

export default Board;
