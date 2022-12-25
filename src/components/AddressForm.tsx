import { FormWrapper } from "./FormWrapper";

type AddressData = {
    street:string
    city: string
    state: string
    zip: string

}

type AddressrFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({state, street, city, zip, updateFields}: AddressrFormProps){
    return (
        <FormWrapper title="Restaurant Location">
            <label style={{borderColor: "green"}}>Street</label>
            <input autoFocus required type="text" value={street} onChange={e => updateFields({street: e.target.value})}/>
            <label>City</label>
            <input autoFocus required type="text" value={city}  onChange={e => updateFields({city: e.target.value})}/>
            <label>State</label>
            <input autoFocus required type="text" value={state}  onChange={e => updateFields({state: e.target.value})}/>
            <label>Zip Code</label>
            <input autoFocus required type="text" value={zip}  onChange={e => updateFields({zip: e.target.value})}/>
        </FormWrapper>
    )
}
