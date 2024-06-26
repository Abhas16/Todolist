import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <FaRegTrashAlt  onClick={e=>{
            props.deleteItem(props.index)
        }} />
        </span>
    </li>
  )
}

export default Todolist