import {useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from './api';
import Card from './components/cards/Card';
import DailyForceast from './components/cards/DailyForecast';


function App() {

  const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 37.7749, lon: 35 })
  });


  return (
    <>
      <div className='flex flex-col gap-8'>
        <Card title="Current">{JSON.stringify(data?.current).slice(0, 100)}</Card>
        <Card title="Hourky Forcast (48 Hours)">{JSON.stringify(data?.hourly).slice(0, 100)}</Card>
        <DailyForceast />
      </div>
    </>
  )
}

export default App
