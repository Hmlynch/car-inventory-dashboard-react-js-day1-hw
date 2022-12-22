import { useState, useEffect, createContext, useContext } from 'react';
import { getFirestore, getDocs, collection, doc, getDoc, addDoc, orderBy, query } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const db = getFirestore()
    const [cars, setCars] = useState([])

    useEffect(() => {
        async function getCars() {
            // const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars`)
            // const data = await response.json()
            // setCars(data)
            const q = query(collection(db, 'car_dealership')) // add in ordered by
            const querySnapshot = await getDocs(q)

            const carDocs = []

            querySnapshot.forEach((doc) => {
                carDocs.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setCars(carDocs)
        }
        getCars()
    }, [])

    async function getCar(id) {
            // const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            // const data = await response.json()
            // setCar(data)
            const docRef = doc(db, 'car_dealership', id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                return {
                    id: docSnap.id,
                    ...docSnap.data()
                }
            } else {
                console.log(`Sorry, a car with id ${id} does not exist`)
            }
        }

    const value = {
        cars,
        getCar
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}