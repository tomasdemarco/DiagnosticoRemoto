import { React, useState } from 'react';
import './navInfo.css';
import { Col, Row } from 'reactstrap';
const NavInfo = ({ setViewInfo }) => {

  return (
    <>
      {
        <Row className="nav">
          <Col className="col" onClick={() => setViewInfo(1)}>Communication test</Col>
          <Col className="col" onClick={() => setViewInfo(2)}>Device information</Col>
          <Col className="col" onClick={() => setViewInfo(3)}>Apps installed</Col>
        </Row>
      }
    </>
  );
};
export default NavInfo;
