import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       <div>
       <img src={logo} className="App-logo" alt="logo" />
        <svg width={200} className="App-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0.3 0.1 137.7 149.3"><g fill="#47848F"><path d="M48.8 32.2c-19.5-3.6-34.9.2-41.1 10.8-4.6 7.9-3.3 18.5 3.2 29.7.5 1 1.8 1.3 2.7.7 1-.5 1.3-1.8.7-2.7C8.5 60.6 7.4 51.5 11.1 45 16.2 36.2 30 32.8 48 36.1c1.1.2 2.1-.5 2.3-1.6s-.4-2.1-1.5-2.3zM21.1 86.4c7.9 8.7 18.1 16.8 29.8 23.5 28.3 16.3 58.4 20.7 73.3 10.6.9-.6 1.1-1.9.5-2.8-.6-.9-1.9-1.1-2.8-.5-13.3 9.1-41.9 4.9-69-10.7C41.6 100 31.6 92.1 24 83.7c-.7-.8-2-.9-2.8-.1-.8.7-.9 2-.1 2.8z"/><path d="M119.4 84c12.8-15.1 17.2-30.3 11.1-40.9-4.5-7.8-14.1-11.9-26.7-12.1-1.1 0-2 .9-2 2s.9 2 2 2c11.4.1 19.6 3.7 23.3 10.1 5.1 8.8 1.1 22.4-10.7 36.3-.7.8-.6 2.1.2 2.8.8.7 2.1.6 2.8-.2zM86.6 32.8C75.1 35.3 62.8 40.1 51 46.9 21.7 63.8 2.7 88.7 5.3 106.7c.2 1.1 1.2 1.8 2.3 1.7 1.1-.2 1.8-1.2 1.7-2.3C6.9 90.1 25 66.6 53 50.4c11.5-6.6 23.4-11.3 34.5-13.7 1.1-.2 1.8-1.3 1.5-2.4-.3-1-1.3-1.7-2.4-1.5z"/><path d="M39.3 119.2c6.7 18.6 17.6 30.1 29.9 30.1 9 0 17.2-6.1 23.7-16.9.6-.9.3-2.2-.7-2.7-.9-.6-2.2-.3-2.7.7-5.8 9.7-12.9 14.9-20.3 14.9-10.2 0-19.9-10.2-26.1-27.5-.4-1-1.5-1.6-2.6-1.2-1.1.4-1.6 1.6-1.2 2.6zm61-3.6c3.5-11 5.3-23.8 5.3-37.1 0-33.1-11.6-61.7-28.1-69-1-.4-2.2 0-2.6 1-.4 1 0 2.2 1 2.6 14.7 6.5 25.7 33.6 25.7 65.4 0 12.9-1.8 25.2-5.1 35.9-.3 1.1.3 2.2 1.3 2.5 1 .3 2.1-.3 2.5-1.3zm37.6-2c0-5.3-4.3-9.6-9.6-9.6s-9.6 4.3-9.6 9.6 4.3 9.6 9.6 9.6c5.4 0 9.6-4.3 9.6-9.6zm-4 0c0 3.1-2.5 5.6-5.6 5.6-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6c3.1 0 5.6 2.5 5.6 5.6zM9.8 123.2c5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6-9.6 4.3-9.6 9.6 4.3 9.6 9.6 9.6zm0-4c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z"/><path d="M69.2 19.2c5.3 0 9.6-4.3 9.6-9.6S74.5 0 69.2 0s-9.6 4.3-9.6 9.6 4.3 9.6 9.6 9.6zm0-4c-3.1 0-5.6-2.5-5.6-5.6S66.1 4 69.2 4c3.1 0 5.6 2.5 5.6 5.6s-2.6 5.6-5.6 5.6zm1.4 70.1c-3.7.8-7.4-1.6-8.2-5.3-.8-3.7 1.6-7.4 5.3-8.2 3.7-.8 7.4 1.6 8.2 5.3.8 3.7-1.5 7.4-5.3 8.2z"/></g></svg>
 
       </div>
        <p>Hello Vite + React-ts + Electron !</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
