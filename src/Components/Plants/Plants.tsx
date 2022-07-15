import { useEffect, useState } from "react";
import { IPlant } from "../../Interfaces";
import axios from 'axios';
import { SaleSection, CardWrapper, PlantCard, PlantInfo, LoadingSpinner  } from "./style";
import Arrow from '/media/arrow.svg';
import { SpinnerGap } from "phosphor-react";


export function Plants() {
   
    const [plants, setPlants] = useState<IPlant[]>([])
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(import.meta.env.VITE_BASE_URL)
        .then((response: any) => {
            setIsLoading(true)
            setPlants(response.data.plants)
        })
        .catch((err: Error) => {
            setError(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])


    return(
        <SaleSection id="ofertas">
            <div>
                <p>Conheca nossas</p>
                <h1>Ofertas</h1>
            </div>            
            
            <CardWrapper>
            {isLoading && <LoadingSpinner><SpinnerGap /></LoadingSpinner>}

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

