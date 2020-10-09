import React, {Component} from 'react'
import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import {MoviesList} from '../components/MoviesList'
// Importamos lo que necesitamos

export class Home extends Component{

  state = {usedSearch:false, results: []}

  _handleResults = (results) => {
    this.setState({results, usedSearch: true})
  }
  // Control the result

  _renderResults(){
    return this.state.results.length === 0
    ? <p>Search Not Found :(</p>
    : <MoviesList movies={this.state.results} />
  }

// Render Method to print whatever the result is
  render(){
    return(
      <div>
      <Title>Movie Searcher</Title>
        <div className="SearchForm-wrapper">
        <SearchForm onResults = {this._handleResults} />
        </div>
      {this.state.usedSearch
      ? this._renderResults()
      : <p>Use the form to Search a Movie :D</p>
      }
      </div>
    )
  }
}
