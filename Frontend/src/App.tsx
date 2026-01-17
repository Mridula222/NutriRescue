
import axios from 'axios'
import './App.css'

function App() {
  function askHealth(){
      axios.get('http://localhost:8000/health')
      .then((response) => {
        console.log(response.data)
      })
    
    }
  return (
    
    <>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>

  <button onClick={askHealth}>Ask</button>
    </>
  )
}

export default App
