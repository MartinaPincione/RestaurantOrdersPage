import { FormWrapper } from "./FormWrapper";

type CompanyData = {
    firstName: string
    lastName: string
    nameOfPersonPlacingOrder: string
}

type CompanyFormProps = CompanyData & {
    updateFields: (fields: Partial<CompanyData>) => void
}

export function CompanyForm({firstName, lastName, nameOfPersonPlacingOrder, updateFields}: CompanyFormProps){
    return (
        <FormWrapper title="Restaurant Details">
            <label>First Name</label>
            <input autoFocus required type="text" value={firstName}  onChange={e => updateFields({firstName: e.target.value})}/>
            <label>Last Name</label>
            <input autoFocus required type="text" value={lastName}  onChange={e => updateFields({lastName: e.target.value})}/>
            <label>Name of person placing order</label>
            <input autoFocus required type="text" value={nameOfPersonPlacingOrder}  onChange={e => updateFields({nameOfPersonPlacingOrder: e.target.value})}/>
        </FormWrapper>
    )
}