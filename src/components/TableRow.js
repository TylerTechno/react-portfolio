import React from 'react'

export default function TableRow(props) {
    return (

        <tr className={
            props.background == 0 ? "w3-white" : ""

        }>
            <td>{props.exp.year}</td>
            <td>{props.exp.title} </td>
            <td>{props.exp.where}</td>
        </tr>

    )
}
