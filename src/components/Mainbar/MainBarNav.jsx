import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import logo from 'images/logo.svg'
import logoH from 'images/logo-h.svg'
import MainBarCart from '../Mainbar/MainBarCart'

export default function MainBarNav({ isOpen, onClick }) {
  return (
    <>
      <div className="main-bar-nav">
        <Navbar
          className="d-flex flex-lg-column flex-grow-1 align-items-start align-items-lg-center p-0 pt-3"
          expand="lg"
          collapseOnSelect
          onSelect={() => console.log('select nav')}
        >
          <div className="main-bar-brand mb-0">
            <Link to="/" className="d-lg-none ml-3">
              <img src={logoH} alt="湘茗" height="30px" />
            </Link>
            <button
              className={`mb-0 border-0 bg-white outline-0 ${
                isOpen ? 'pt-lg-4' : ''
              }`}
              onClick={() => onClick(!isOpen)}
            >
              <img
                src={logo}
                alt="湘茗"
                width="30px"
                className={`d-none ${isOpen ? 'd-lg-none' : 'd-lg-inline'}`}
              />
              <i
                className={`fas fa-bars fa-lg d-none ${
                  !isOpen ? 'd-lg-none' : 'd-lg-inline'
                }`}
              />
            </button>
          </div>

          <Navbar.Toggle
            className="ml-auto pt-0 border-0 outline-0"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="h-100 flex-lg-column text-center">
              <Nav.Item className="d-lg-none border-bottom">
                <Nav.Link as={Link} to="Product" className="mb-0 text-f">
                  尋茶
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-lg-none border-bottom">
                <Nav.Link as={Link} to="/events" className="mb-0">
                  文化走訪
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-lg-none border-bottom">
                <Nav.Link as={Link} to="/cart" className="mb-0">
                  茗家精選
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="border-bottom border-bottom-lg-0">
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="mb-0"
                  onClick={() => (isOpen ? onClick(!isOpen) : '')}
                >
                  <i className="fas fa-user" />
                  <span className="d-lg-none ml-2">會員中心</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="border-bottom border-bottom-lg-0">
                <Nav.Link
                  as="div"
                  onClick={() => (isOpen ? onClick(!isOpen) : '')}
                  className="mb-0"
                >
                  <MainBarCart />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="flex-grow-1" />
              <Nav.Item className="mb-lg-3 border-bottom border-bottom-lg-0">
                <Nav.Link as={Link} to="/cart" className="mb-0">
                  <i className="fas fa-phone" />
                  <span className="d-lg-none ml-2">聯絡我們</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}
