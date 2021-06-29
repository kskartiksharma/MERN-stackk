import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="Sidebar">
        <ul className="nav flex-column">
        <br/>
        <br/>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Post">My feeds</Link>
        </li>
        <br/>
        <br/>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Chats</Link>
        </li>
        <br/>
        <br/>

        <li className="nav-item">
          <Link className="nav-link" to="#">Friends</Link>
        </li>
        <br/>
        <br/>
        <li className="nav-item">
          <Link className="nav-link" to="#">Settings</Link>
        </li>
        
      </ul>
        </div>
    )
}
