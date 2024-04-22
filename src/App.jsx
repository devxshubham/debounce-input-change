import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function useDebounce(input,timeout){
  const [debounced, setDebounced] = useState()
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setDebounced(input)
    },timeout)

    return ()=>{
      clearTimeout(timeoutId)
    }
  },[input])

  return debounced
}

function App() {

  // State to manage the user input
  const [inputValue, setInputValue] = useState('');

  // Use the useDebounce hook to get the debounced value
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Integrate the debouncedValue in your component logic (e.g., trigger a search API call via a useEffect)

  return (
    <div>
      debounced value = {debouncedValue}
      <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </div>
  );
};


export default App
