import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ButtonBack} from '../components/ButtonBack'

//import {Movie} from './components/Movie'

const API_KEY = '9b86922b'// llave obtenida registrandome en omdbapi.com

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }
state = {movie: {}}

  _fetchMovie({id}){

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then( movie => {
        console.log({movie})
        this.setState({movie})
      })

  }
  componentDidMount(){
    const {id} = this.props.match.params
    this._fetchMovie({id})
  }

  _goBack(){
    window.history.back();
  }

  render(){
    const {Title, Poster, Actors, Metascore, Plot} =
    this.state.movie
    return(
      <div>
        <ButtonBack />
        <h1>{Title}</h1>
        <img src={Poster} />
        <h3>{Actors}</h3>
        <h4>{Metascore}</h4>
        <h4>{Plot}</h4>
        <p>Prueba de parrafo </p>
      </div>
    )
  }
}
