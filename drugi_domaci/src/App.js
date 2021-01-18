import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import './style.css';

export default class MainPage extends Component{
    render() {
        return (
            <div className="link">
                <h3> <Link to="/admin/proizvodi">SVE KNJIGE</Link> </h3>
                
                <h3> <Link to="/admin/unos-novog-proizvoda">UNESI NOVU KNJIGU</Link> </h3>
            </div>
        )
    }
};