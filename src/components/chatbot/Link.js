import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Link = () => {
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
                href="https://www.potatopro.com/potato-conferences-tradeshows/interpack-2023"
                target="_blank"
              >
                Interpack 2023
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.potatopro.com/potato-conferences-tradeshows/national-restaurant-association-show-2023"
                target="_blank"
              >
                National Restaurant Association Show 2023
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.potatopro.com/potato-conferences-tradeshows/sweets-snacks-expo-2023"
                target="_blank"
              >
                Sweets & Snacks Expo 2023
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.rmc.gov.in/rmcwebsite/frm_sports_member_master.aspx"
                target="_blank"
              >
                Sports Registration
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.potatopro.com/potato-conferences-tradeshows/hotel-show-2023"
                target="_blank"
              >
               The Hotel Show 2023
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link
