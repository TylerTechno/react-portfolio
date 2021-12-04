import React from 'react'
import TableRow from './TableRow'

import experience from "../experiences.json"



export default function Resume() {
    return (
        <div>
            <div className="w3-half w3-indigo w3-container" style={{minHeight:"800px"}}>
      <div className="w3-padding-64 w3-center">
        <h2>Resume</h2>
        <p>A draft from my CV</p>
        <div className="w3-container w3-responsive">
          <table className="w3-table">
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>Where</th>
            </tr>
            
            {
                experience.map((item, index) => (
                     <TableRow exp = {item} background = {index%2} />
                ))
            }
            {/* <tr>
              <td>2013-2021</td>
              <td>VSP One</td>
              <td>Optical Laboratory Level 5 Tech, Team Lead</td>
            </tr>
            <tr className="w3-white">
              <td>2008-2013</td>
              <td>KDandC</td>
              <td>PC repair tech, website design </td>
            </tr>
            <tr>
              <td>2005-2008</td>
              <td>Highschool</td>
              <td>Orangevale, USA</td>
            </tr> */}

            
          </table>
        </div>
      </div>
    </div>
  </div>
        
    )
}
