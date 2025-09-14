import { IAddress } from "../models/Address.model";

type PropsAddressCard = IAddress & 
{
    handleChangeAddress: (address: IAddress[]) => void
};

export const AddressCard = ({address, city, zipCode, handleChangeAddress }: PropsAddressCard) => {
    return(
        <div className="address-card">
            <div className="address-title">{address}</div>
            <div className="address-sub">{city}</div>
            <div className="address-sub">{zipCode}</div>
            <button style={{fontSize:"16px", fontWeight:"600", padding:"0.5rem 1rem"}} className="btn-main" onClick={() => handleChangeAddress([
                {address: 'Quan 2', city: 'HCM', zipCode: '700000', id: 1}, 
                {address: 'Quan 3', city: 'HCM', zipCode: '100001', id: 2},
                {address: 'Quan 4', city: 'HCM', zipCode: '200002', id: 3},
                {address: 'Quan 5', city: 'HCM', zipCode: '300003', id: 4},
                {address: 'Quan 6', city: 'HCM', zipCode: '400004', id: 5},
                {address: 'Quan 7', city: 'HCM', zipCode: '500005', id: 6},
            ])
            }>Select</button>

        </div>
    )
}
