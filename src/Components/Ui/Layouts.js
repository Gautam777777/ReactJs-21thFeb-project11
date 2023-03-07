import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

export default function Layouts() {
  return (
    <>
            <Header />
            <main>
                <Row className="h-100">
                    <Col sm={3} className="g_tbdr">
                        <Aside />
                    </Col>
                    <Col sm={6} className="g_tbdr">
                        <Outlet />
                    </Col>
                  </Row>
                  
            </main>
            <Footer />
        </>
  )
}
