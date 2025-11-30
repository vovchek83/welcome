import { useQuery } from '@tanstack/react-query'
import './App.css'
import { getWeather } from './api';


function App() {

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 37.7749, lon: 35 })
  });


  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
