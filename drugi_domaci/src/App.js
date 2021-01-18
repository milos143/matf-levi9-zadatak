import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import './style.css';

export default class MainPage extends Component{
    render() {
        return (
            <div className="link">

                <h1> Online Bookstore - Levi9 </h1>

                <Link to="/admin/unos-novog-proizvoda"> <button class="button button2">UNESI NOVU KNJIGU </button> </Link>
                <br></br>
                <br></br>
                <Link to="/admin/proizvodi"> <button class="button button2"> SVE KNJIGE </button> </Link>
            </div>
        )
    }
};