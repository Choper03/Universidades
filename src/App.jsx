import { useState } from 'react'
import './App.css'
import Card from './Components/tablero.jsx'

import usac from './assets/Usac_logo.png'

const udeo = "https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Tarjetas</h1>
      <div className='container'>
          <Card imagen={"https://i.pinimg.com/originals/34/22/90/3422900cb9e9bd4ce803847129eb6c9f.jpg"} Nombre={"Universidad Mariano Galvez"}
          vision={"Ser una institución de educación superior altamente competitiva, líder en su género, innovadora y creadora de conocimientos científicos y tecnológicos, en la que sus educandos alcancen una formación integral, armónica y potencien sus aptitudes y capacidades, en un ambiente de libertad y aceptación de los supremos"}/>

          <Card imagen={udeo} Nombre={"Universidad de Occidente"} 
          vision={"La visión de la Universidad de Occidente es llegar a ser, desde la excelencia académica, la mejor en la enseñanza y difusión de la filosofía de la libertad, en línea con la Escuela Austríaca de Economía, y contribuir así al progreso espiritual y material de la persona humana."}/>
      
          <Card imagen={usac} Nombre={"Universidad San Carlos"} 
          vision={"La Universidad de San Carlos de Guatemala es la institución de educación superior estatal, autónoma, con cultura democrática, con enfoque multi e intercultural, vinculada y comprometida con el desarrollo científico, social, humanista y ambiental con una gestión actualizada, dinámica, efectiva y con recursos óptimamente utilizados para alcanzar sus fines y objetivos, formadora de profesionales con principios éticos y excelencia académica."}/>
      </div>
    </>
  )
}
export default App
