import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper/';
import Button from '@material-ui/core/Button';

import './sveKnjige.css';

export default class sveKnjige extends Component {
  
  constructor(props) {

    super(props);

    this.state = {
      rows: []
    }

    this.showBooks = this.showBooks.bind(this);
  }
  
  componentDidMount() {
    this.showBooks();
  }

  showBooks() {
    fetch('/admin/proizvodi')
    .then((res) => res.json())
    .then((res_json) => {
      let rows = []

      for (const [key, value] of Object.entries(res_json)) {
        
        let tmp = {
          id: parseInt(key), 
          title: value.title,
          author: value.author
        };

        rows.push(tmp)
      }

      this.setState(
        {rows: rows}
      )
    })
    .catch((err) => console.error(err));
  }

  deleteBooks = async(id) => {
    const res = await fetch('/admin/proizvodi', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
    });

    res.json()
      .then((res_json) => {
        let rows = []
        for (const [key, value] of Object.entries(res_json)) {
            
          const tmp= {
              id: parseInt(key),
              title: value.title,
              author: value.author
            };
            rows.push(tmp);
        }

        this.setState(
          {rows: rows});
    })
  }

  render() {
    return (
      <div>   
        <div className="link">
        <NavLink to="/"> 
          <button class="button button2"> POČETNA </button>
        </NavLink>
        </div>
        <hr>
        </hr>
        <TableContainer component={Paper}>
          <Table classtitle={'table'}>
            <TableHead>
                <TableRow>
                  <TableCell >Red. br.</TableCell>
                  <TableCell >Naslov</TableCell>
                  <TableCell >Autor</TableCell>
                  <TableCell >BRISANJE</TableCell>
                  </TableRow>
            </TableHead>

            <TableBody>
            
              {this.state.rows.map((red) => (
              <TableRow key={red.id}>

                  <TableCell >{red.id}</TableCell>
                  
                  <TableCell >{red.title}</TableCell>
                  
                  <TableCell >{red.author}</TableCell>
                  
                  <TableCell>
                    <Button  color="primary" onClick={()=>this.deleteBooks(red.id)}>OBRIŠI OVU KNJIGU</Button>
                  </TableCell>
              </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </div>  
    );
  }
};