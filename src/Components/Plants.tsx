import { useEffect, useState } from "react";
import { IPlant } from "../Interfaces";
import axios from 'axios';
import { SaleSection, CardWrapper, PlantCard, PlantInfo  } from "../Styles";
import Arrow from '/media/arrow.svg'


export function Plants() {

    const [plants, setPlants] = useState<IPlant[]>([])
    const [error, setError] = useState({})


    useEffect(() => {
        axios.get('http://localhost:3333/plants')
        .then((response) => {
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

