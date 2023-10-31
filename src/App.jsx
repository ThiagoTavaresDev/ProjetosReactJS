import styled from "styled-components"
import Trevo from './assets/Trevo.svg'
import SideBar from './assets/SideBar.svg'
import { ContainerRigthSide, ContainerSideLeft } from "./Style"
import { useState, useEffect } from "react"
function App() {
    const [numberOption, setNumberOption] = useState('')
    const [color, setColor] = useState('#6BEFA3')
    const [data,setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('../api/mega.json');
          const jsonData = await response.json();
          setData(jsonData);

        } catch (error) {
          console.error('Ocorreu um erro:', error);
        }
      }
   
      fetchData();
    },[])
    console.log(data)

    console.log(color)
    console.log(numberOption)
    useEffect(() => {
        if (numberOption === '1') {
          setColor('#6BEFA3');
            fetchData('../api/mega.json')
        } else if (numberOption === '2') {
          setColor('#8666EF');
            fetchData('../api/quina.json')
        }
        else if (numberOption === '3') {
            setColor('#DD7AC6');
            fetchData('../api/lotofacil.json')
          }
          else if (numberOption === '4') {
            setColor('#FFAB64');
            fetchData('../api/lotomania.json')
          }
          else if (numberOption === '5') {
            setColor('#5AAD7D');
            fetchData('../api/timemania.json')
          }
          else if (numberOption === '6') {
            setColor('#BFAF83');
            fetchData('../api/diadesorte.json')
          }

      }, [numberOption]);
    
      async function fetchData(apiEndpoint) {
        try {
          const response = await fetch(apiEndpoint);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Ocorreu um erro:', error);
        }
      }

      function handleNumber(e) {
        const selectedValue = e.target.value;
        setNumberOption(selectedValue);
      }

  if(data == null){
    return <div>Carregando...</div>
  }
  
  return (
    <>
    <div id="containLeftSide">
    
   <svg width="613" height="1080" viewBox="0 0 613 1080" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <path d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={color}/>
  </svg>
    
    </div>
    <ContainerSideLeft>
    <select name="selected" id="selected" 
    onChange={handleNumber} 
    >
       <option value="1">MEGA-SENA</option >
       <option value="2">QUINA</option>
       <option value="3">LOTOFACIL</option>
       <option value="4">LOTOMANIA</option>
       <option value="5">TIMEMANIA</option> 
       <option value="6">DIA DE SORTE</option> 
    </select>
    <img src={Trevo} alt="Trevin" id="trevo"/>
    <h2 id="titleMega">{data.nome}</h2>
    <p id="concurso">Concurso</p>
    <span id="dataPost">4531 – 07/04/2020</span>
    </ContainerSideLeft>

    <ContainerRigthSide>
        <div id="teste">{data.dezenas.map((item,index) => <span key={index}>{item}</span>)}</div>
    </ContainerRigthSide>


    </>
  )
}

export default App
