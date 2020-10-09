import React from 'react'
import {Link} from 'react-router-dom'

// Componente que para el Boton de Regresar a Home
export const ButtonBack = () => (
  <Link
  className="button is-link"
  to='/'
  >
  Return to Home
  </Link>
)
