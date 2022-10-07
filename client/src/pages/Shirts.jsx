import axios from 'axios';
// import { response } from 'express';
import '../styles/shirts.css'
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
    }, [])


    return(
        <div className='card-grid'>
        {shirts.map((shirt) => (
            <ShirtsCard
                name={shirt.size}
                material={shirt.material}
                image={shirt.image}
                />
        ))}
        </div>
    )

}
export default Shirts