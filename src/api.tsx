import { weatherSchema } from "./schemas/weatherSchema.ts"

const API_KEY = "91f8bdb3d347aba6478a1ec9e9a4dc21";

async function getWeather({ lat, lon }: { lat: number, lon: number }) {

    const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`);
    const data = await res.json();
    return weatherSchema.parse(data);
}

export { getWeather };