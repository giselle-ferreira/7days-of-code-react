import { useEffect, useState } from "react";
import { IPlant, GetResponse } from "../../Interfaces";
import axios from 'axios';
import { SaleSection, CardWrapper, PlantCard, PlantInfo  } from "./style";
import Arrow from '/media/arrow.svg'
import {api} from '../../Services/api'


export function Plants() {

    // const { data: plants, loading, error } = api('http://localhost:3333/plants');

    // if(loading) return <p>Loading...</p>
    // if(error) console.error(error)
    
    const [plants, setPlants] = useState<IPlant[]>([])
    const [error, setError] = useState({})


    useEffect(() => {
        axios.get<GetResponse>('http://localhost:3333/plants')
        .then((response: any) => {
            setPlants(response.data.plants)
        })
        .catch((err: Error) => {
            setError(err)
        })
    }, [])


    return(
        <SaleSection id="ofertas">
            <div>
                <p>Conheca nossas</p>
                <h1>Ofertas</h1>
            </div>
            
            <CardWrapper>
                {plants?.map((plant: IPlant, key: number) => {
                    return(
                        <PlantCard key={key}>                            
                            <img src={plant.image} alt="" />
                            <PlantInfo>
                                <h2>{plant.name}</h2>
                                <span>R${plant.price}</span>
                                <a href="#">Comprar<img src={Arrow} /></a> 
                            </PlantInfo>       
                        </PlantCard>
                    )
                })}
            </CardWrapper>
        </SaleSection>
    )
}

