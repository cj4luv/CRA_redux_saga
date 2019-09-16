import React from 'react';
import { Pagination } from 'react-bootstrap';

const BsPagination = () => (
  <Pagination className="pagination mb-3 justify-content-sm-center justify-content-center">
    <Pagination.Prev />
    <Pagination.Item className="page-item">1</Pagination.Item>
    <Pagination.Item className="page-item active">2</Pagination.Item>
    <Pagination.Item className="page-item">3</Pagination.Item>
    <Pagination.Next />
  </Pagination>
);

export default BsPagination;
