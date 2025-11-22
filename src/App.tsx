import Button from './components/button'
import './App.css'

function App() {


  return (
    <>
      <div className='flex gap-4 p-4 flex-row'>
        <Button >Login</Button>
        <Button type='secondary'>Cancel</Button>
        </div>
    </>
  )
}

export default App
