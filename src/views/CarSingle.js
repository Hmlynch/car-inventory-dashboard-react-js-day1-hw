import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../components/Car';
import { DataContext } from '../contexts/DataProvider';

export default function CarSingle() {
    const [car, setCar] = useState({})
    const { id } = useParams()
    const { getCar } = useContext(DataContext)

    useEffect(() => {
        async function handleGetCar() {
            const data = await getCar(id)
            setCar(data)
        }
        handleGetCar()
    }, [id])

    // useEffect(() => {
    //     async function getCar() {
    //         const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
    //         const data = await response.json()
    //         setCar(data)
    //     }
    //     getCar()
    // }, [])

    return (
        <div className="car">
            Post Singles: {id}
            <Car car={car}/>
        </div>
    )
}