import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  Dropdown,
  FormCheck,
  Form,
  Badge,
  ButtonGroup,
} from 'react-bootstrap';

/**
 *
 * TODO:
 * - Table 컬럼의 들어갈 데이터와 Row Data를 부모에서 받아오게 해야한다.
 */

const Row = ({ id, idx }) => (
  <tr>
    <td>
      <div className="custom-control custom-checkbox icon-only">
        <FormCheck.Input
          type="checkbox"
          className="custom-control-input uxs-check-all-item"
          id={id}
        />
        <FormCheck.Label
          className="custom-control-label"
          htmlFor={id}
        >
          <span className="sr-only">Check this custom checkbox</span>
        </FormCheck.Label>
      </div>
    </td>
    <th scope="row">{idx}</th>
    <td className="position-relative">
      <Dropdown>
        <Dropdown.Toggle
          className="text-left btn-md"
          variant="dark"
        >
        디지털/가전
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">디지털/가전</Dropdown.Item>
          <Dropdown.Item href="#/action-2">패션/의류</Dropdown.Item>
          <Dropdown.Item href="#/action-3">생활/가전</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </td>
    <td>
      <Form.Control type="text" className="text-light" id="input2" defaultValue="마이크로소프트 Window 10 OS" />
    </td>
    <td>45,000원</td>
    <td>
      <div className="d-flex">
        <div className="col-5 p-0 pr-3 text-right">
          <span className="d-inline-block align-middle">62</span>
        </div>
        <div>
          <div>
            <Badge variant="success" pill style={{ width: 48 }}>안정</Badge>
          </div>
        </div>
      </div>
    </td>
    <td>
      <ButtonGroup>
        <Button variant="ghost-primary" className="icon-only" data-toggle="modal" data-target="#exampleModalCenter">
          <span className="glyphicons-outline_delete" aria-hidden="true" />
          <span className="sr-only">delete</span>
        </Button>
        <Button variant="ghost-primary" className="icon-only" data-toggle="modal" data-target="#exampleModalCenter2">
          <span className="glyphicons-add" aria-hidden="true" />
          <span className="sr-only">add</span>
        </Button>
      </ButtonGroup>
    </td>
  </tr>
);

Row.propTypes = {
  id: PropTypes.string,
  idx: PropTypes.number,
};

Row.defaultProps = {
  id: '',
  idx: 0,
};

const List = () => {
  const RowId = 'checkItem';
  const arr = [];
  for (let i = 0; i < 9; i += 1) {
    const idx = i + 1;
    const id = `${RowId}${idx}`;
    arr.push(<Row key={id} id={id} idx={idx} />);
  }

  return arr;
};


const BsTable = () => (
  <Table className="order-table table mb-0" style={{ minWidth: 680 }}>
    <thead>
      <tr>
        <th scope="col">
          <div className="custom-control custom-checkbox icon-only">
            <FormCheck.Input type="checkbox" className="custom-control-input uxs-check-all" id="checkAll" />
            <FormCheck.Label className="custom-control-label" htmlFor="checkAll">
              <span className="sr-only">Check this custom checkbox</span>
            </FormCheck.Label>
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
      <List />
    </tbody>
  </Table>
);

export default BsTable;
