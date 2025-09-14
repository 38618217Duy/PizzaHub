import PizzaCard from "../sections/PizzaCard";
import { AddressCard } from "../sections/AddressCard";
import { useState } from "react";
import { TPizza } from "../models/Pizza.model";
import { IAddress } from "../models/Address.model"; 


const HomePage  = () => {
    const[address, setAddress] = useState<IAddress[]>([
        {
            id: 1,
            address: "123 Main St",
            city: "New York",
            zipCode: "10001"
        },{
            id: 2,
            address: "456 Elm St",
            city: "Los Angeles",
            zipCode: "90001"
        },
        {
            id: 3,
            address: "789 Oak St",
            city: "Chicago",
            zipCode: "60601"
        }, 
        {
            id: 9,
            address: "789 OSaka",
            city: "Chicago",
            zipCode: "60601"
        }, 
        {
            id: 3,
            address: "789 Oak St",
            city: "Chicago",
            zipCode: "60601"
        }, 
        {
            id: 4,
            address: "101 Pine St",
            city: "San Francisco",
            zipCode: "94101"
        }
    ])
    const [pizzaList] = useState<TPizza[]>([
        {
            id: 1,
            name: "Pizza",
            price: 10
        },
        {
            id: 2,
            name: "PizzHub",
            price: 20
        },
        {
            id: 3,
            name: "PizzHub",
            price: 20
        },
        {
            id: 4,
            name: "PizzHub",
            price: 20
        },
        {
            id: 5,
            name: "PizzHub",
            price: 20
        },
        {
            id: 6,
            name: "PizzHub",
            price: 20
        },


    ])
    const handleChangeAddress = (address: IAddress[]) => {
        setAddress(address);
    }
    return(
        <div style={{height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
            <div className="wrapper-card-items">
                {address.map((address) => (<AddressCard key={address.id} id={address.id} address={address.address} city={address.city} zipCode={address.zipCode} handleChangeAddress={handleChangeAddress}/>))}
            </div>
            <div className="wrapper-card-items">
                {pizzaList.map((pizza) => (<PizzaCard key={pizza.id} id={pizza.id} name={pizza.name} price={pizza.price}/>))}
            </div>

        </div>
    )
}
export default HomePage;