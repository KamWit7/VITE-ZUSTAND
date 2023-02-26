import { useState } from 'react'
import './App.css'
import { useBearStore } from './context/useBearStore'
import Bears from './components/Bears'
import BearsImg from './components/BearsImg'

function App() {
  const x: X = 1
  const Kamil: Kamil = 'Kamil'

  const [randomNumberOfBears, setBears, bears] = useBearStore((store) => [
    store.randomNumberOfBears,
    store.setBears,
    store.bears,
  ])

  return (
    <div className='App flex'>
      <a href='https://vitejs.dev' target='_blank'>
        <img src='/vite.svg' className='logo' alt='Vite logo' />
      </a>

      <button onClick={randomNumberOfBears}>Random Number of Bears</button>
      <input
        onChange={(e) => {
          const number = parseInt(e.target.value)
          setBears(!isNaN(number) ? number : 0)
        }}
        value={bears}
        type='text'
        placeholder='How Much Bears?'
      />
      <Bears />
      <BearsImg />
    </div>
  )
}

export default App
