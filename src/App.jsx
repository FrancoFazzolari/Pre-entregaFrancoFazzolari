import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteHeaderTest from './components/ComponenteHeaderTest'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <ComponenteHeaderTest/>
    </header>

  );
}
