import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../components/Car';

export default function CarSingle() {
    const [car, setCar] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function getCar() {
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
            setCar(data)
        }
        getCar()
    }, [])

    return (
        <div className="car">
            <Car car={car}/>
        </div>
    )
}