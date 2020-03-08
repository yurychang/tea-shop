import React from 'react';
import { Nav } from 'react-bootstrap';

export default function MainBar() {
  return (
    <>
      <div className="sy_main-bar">
        <h1 className="main-bar-brand">
          <a href="#">logo</a>
        </h1>
        <Nav className="flex-grow-1 flex-lg-column">
          <Nav.Item>
            <Nav.Link className="mt-2">cart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="mt-2 mt-lg-0">cart</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-grow-1">
            {/* <Nav.Link>member</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="mt-2">contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
