import React from 'react';
import { Pagination } from 'react-bootstrap';

const BsPagination = () => (
  <Pagination className="pagination mb-3 justify-content-sm-center justify-content-center">
    <Pagination.Prev />
    <Pagination.Item>1</Pagination.Item>
    <Pagination.Item active>2</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Next />
  </Pagination>
);

export default BsPagination;
