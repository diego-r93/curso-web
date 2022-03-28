import React from 'react'
import ReactDOM from 'react-dom'

// import { BoaTarde, BoaNoite } from './components/Multiplos'
// import Multi from './components/Multiplos'
// import Multi, { BoaNoite } from './components/Multiplos'
//  import Saudacao from './components/Saudacao'
 import Pai from './components/Pai'
 import Filho from './components/Filho'


ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" />
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
  </div>
  , document.getElementById('root'))