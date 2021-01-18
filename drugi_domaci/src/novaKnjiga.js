import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './novaKnjiga.css';

export default class novaKnjiga extends Component {
    
    constructor(props) {
        super(props);

        this.unesiProizvod = this.unesiProizvod.bind(this);
        this.unesititle = this.unesititle.bind(this);
        this.unesiauthor = this.unesiauthor.bind(this);

        this.state = {
          title: undefined,
          author:  undefined
        }
    }

    unesititle(e) {
      console.log("ime")
      this.setState(
        {
          "title": e.target.value
        });
    }

    unesiauthor(e) {
      console.log("ime2")

      this.setState(
        {
          "author": e.target.value
      });
    }

    unesiProizvod = async() => {
      
      console.log("ime3")
      if (this.state.title === undefined || this.state.author === undefined) 
      {
        console.log("ime3")
        console.log("Popunite sva polja!")
      } 
      else 
      {
        

        await fetch('/admin/unos-novog-proizvoda', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.state.title,
            author: this.state.author
          })
        });
      }

      document.querySelectorAll('input').forEach(input => 
        (input.value = "")
      );
      
      this.setState({title: undefined, author: undefined});
    }


    render() {
        return (
          <div class="sve">
            <h1>Unos nove knjige</h1>
            <form>
              <div id="sve">

                <label> Naslov </label>
                <input type="text" id="titleNovogProizvoda" onChange={ this.unesititle } placeholder="Naslov..." required></input>


                <label> Autor </label>
                <input type="text" id="authorNovogProizvoda" onChange={ this.unesiauthor } placeholder="Autor..." required></input>

                <button class="button button1" type="submit" id = "unosProizvoda" onClick={this.unesiProizvod}>
                  DODAJ NOVU KNJIGU
                </button>

                <p> </p>
                <NavLink to="/"> 
                  <button class="button button2"> POČETNA </button>
                </NavLink>
              </div>
            </form>
          </div>
        )
    }
}