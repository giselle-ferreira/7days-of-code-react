import { useEffect, useState } from "react";
import { IPlant } from "../../Interfaces";
import axios from 'axios';
import { SaleSection, CardWrapper, PlantCard, PlantInfo  } from "./style";
import Arrow from '/media/arrow.svg'


export function Plants() {
   
    const [plants, setPlants] = useState<IPlant[]>([])
    const [error, setError] = useState({})

    useEffect(() => {
        axios.get("https://api-casaverde.herokuapp.com/plants")
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
            {!plants && <p>Carregando...</p>}

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

