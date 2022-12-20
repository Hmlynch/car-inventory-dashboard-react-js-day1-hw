import { useState } from 'react';

export default function Inventory() {
    const [inventory, setInventory] = useState([
        {
            "make": "Jeep",
            "model": "Wrangler",
            "year": 2022,
            "features": {
                "colors": "Red, Blue, Black, White",
                "fuelType": "Gas",
                "transmission": "Manual",
                "driveType": "Four-Wheel Drive",
                "other": "Removeable Top"
            }
        },
        {
            "make": "Ford",
            "model": "F-150",
            "year": 2022,
            "features": {
                "colors": "Grey, Silver, Black, White",
                "fuelType": "Diesel",
                "transmission": "Manual",
                "driveType": "Four-Wheel Drive",
                "other": "Open Bed"
            }
        },
        {
            "make": "Toyota",
            "model": "Camery",
            "year": 2022,
            "features": {
                "colors": "Red, Blue, Black, White",
                "fuelType": "Gas",
                "transmission": "Automatic",
                "driveType": "Rear-Wheel Drive",
                "other": "Gas Milage"
            }
        },
        {
            "make": "Tesla",
            "model": "Model X",
            "year": 2022,
            "features": {
                "colors": "Red, Blue, Black, White",
                "fuelType": "Electric",
                "transmission": "Automatic",
                "driveType": "Front-Wheel Drive",
                "other": "Self-Driving"
            }
        }
    ])

    const [featuredInventory, setFeaturedInventory] = useState(inventory[0])

    return (
        <div className="inventory">
            <h2>Featured Cars in our Inventory</h2>
            <div className="featured-inventory">
                <h3>{featuredInventory.make} {featuredInventory.model} {featuredInventory.year}</h3>
            </div>
            <hr/>
            { inventory.map(car => {
                return (
                    <div className="car" key={car.make} onClick={ () => setFeaturedInventory(car) }>
                        <h3>{car.make} {car.model} {car.year}</h3>
                        <ul>
                            <li>{car.features.colors}</li>
                            <li>{car.features.fuelType}</li>
                            <li>{car.features.transmission}</li>
                            <li>{car.features.driveType}</li>
                            <li>{car.features.other}</li>
                        </ul>
                    </div>
                )
            }) }
        </div>
    )
}