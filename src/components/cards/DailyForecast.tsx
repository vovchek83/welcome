import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";

type Props = object;

// eslint-disable-next-line no-empty-pattern
export default function DailyForceast ({}: Props) {

    const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 10, lon: 25 })
  });
  
  return (
      <Card title="Daily Forcast" childrenClassName="flex flex-col gap-2">
                    {data?.daily.map((day) => ( 
                <div key={day.dt} className="flex justify-between p-2">
                    <p className="w-9">{new Date(day.dt * 1000).toLocaleDateString(undefined,
                        { weekday: 'short'}
                    )}</p>
                    <img className="size-10" 
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                         alt="weather icon" />
                    <p>{Math.round(day.temp.day)}°C </p>
                    <p className="text-gray-500/70">{Math.round(day.temp.min)}°C</p>
                    <p className="text-gray-500/70">{Math.round(day.temp.max)}°C</p>

                </div>
            ))}

        </Card>
  );
}
