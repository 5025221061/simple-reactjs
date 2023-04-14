import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
import Select from 'react-select'

function App() {
  const [data, setData] = useState([])
  const [userSelect, setUserSelect] = useState("")
  const [isShow, setIsShow] = useState(false)

  const getBerries = async() => {
    const berries = await fetch("https://pokeapi.co/api/v2/item")
    const value = await berries.json()
    let result = value.results.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setData(result.sort((a, b) => a.label.localeCompare(b.label)));
  }
  useEffect(() => {
    getBerries()
  }, [])

  const handleClick = () => {
    setIsShow(state => !state)
    console.log(userSelect);
  }

  // const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  //   <label style={{ marginRight: '1em' }}>
  //     <input type="checkbox" {...props} />
  //     {children}
  //   </label>
  // );

  const handleChange = (value) => {
    setUserSelect(value)
  }

  return (
    <div className="App">
      <Select options={data} onChange={(e) => handleChange(e.value)}> </Select>
      {/* <Checkbox>tes</Checkbox> */}
      <button disabled={!userSelect} onClick={() => handleClick()}>{isShow ? "Hide" : "Show"} button</button>
      <h1>{isShow? userSelect : " "}</h1>
    </div>
  );
}

export default App;
