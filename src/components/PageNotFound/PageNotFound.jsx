import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa"
import IconPageNotFound from '../../assets/page-not-found.png'
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div className="wrapper">
            <Link to='/'>
                    <button className="btn btn-back">
                        <FaAngleLeft className="msg-back" style={{fontSize: '20px'}} />
                        <span className="msg-back">Back</span>
                    </button>
            </Link>
            <div style={{margin:'auto', textAlign:'center'}}>
                <h1>404</h1>
                <p>Page Not Found</p>
                <img className="page-not-found" src={IconPageNotFound} alt="404: page not found" />
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            
        </div>
    )
}