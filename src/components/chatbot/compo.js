import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Company = () => {
    return (    
        <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Useful Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://test-potatopro.com/news"
                  target="_blank"
                >
                  All Companies Potato Sector
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

const Product = () => {
    return (    
        <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Useful Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://www.potatopro.com/product-group/all-products"
                  target="_blank"
                >
                  All product
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://www.potatopro.com/products/nsspl-french-fry-lines"
                  target="_blank"
                >
                  NSSPL French Fry Lines
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://www.potatopro.com/products/heat-and-control-fastback-p2-400e-horizontal-motion-conveyor"
                  target="_blank"
                >
                  Heat and Control FastBack P2 400E Horizontal Motion Conveyor
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://www.potatopro.com/products/tummers-e%C2%B2e-condenser"
                  target="_blank"
                >
                  Tummers E²E Condenser
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}
  
export{
    Product
}
export default Company;