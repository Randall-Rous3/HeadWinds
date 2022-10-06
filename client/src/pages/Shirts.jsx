import axios from 'axios';
// import { response } from 'express';
import { useEffect, useState } from 'react';
import ShirtsCard from '../components/ShirtsCard';



const Shirts = (props) => {
const [shirts, setShirts] = useState([])


    const getAllShirts = async(shirt) =>{
        const response = await axios.get(`http://localhost:3001/api/shirts`)
        setShirts(response.data)
    }

    useEffect(() => {
        getAllShirts()
        console.log(shirts)
    }, [])


    return(
        <div>
        {shirts.map((shirt) => (
            <ShirtsCard
                name={shirt.size}
                material={shirt.material}
                console={console.log(shirt.name)}
                />
        ))}
        </div>
    )

}
export default Shirts