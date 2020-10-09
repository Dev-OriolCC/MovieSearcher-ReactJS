import React, {Component} from 'react'

const API_KEY = '9b86922b'

export class SearchForm extends Component{
  state = {
    inputMovie: ''
  }
  // Controlar cambio
  _handleChange = (evento) =>{
    this.setState ({inputMovie: evento.target.value})
  }
  //Controla el Submit o mas bien Previente
  _handleSubmit = (evento) =>{
    evento.preventDefault()
    const {inputMovie} = this.state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then( results => {
        const {Search = [], totalResults = '0'} = results
        //const searchResults = Search || []
        console.log(totalResults)
        this.props.onResults(Search)
      })
    //alert(this.state.inputMovie)
  }

  render(){
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
            className="input"
            onChange = {this._handleChange}
            type="text"
            placeholder="Type a Movie :)">
            </input>
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>

    )
  }
}
