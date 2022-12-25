import { useMultistepForm } from "../hooks/useMultistepForm"
import { Button } from "react-bootstrap";
import { CompanyForm } from "../components/CompanyForm";
import { AddressForm } from "../components/AddressForm";
import { AccountForm } from "../components/AccountForm";
import { FormEvent, useState } from "react";


type FormData = {
    firstName: string
    lastName: string
    nameOfPersonPlacingOrder: string
    street: string
    city: string
    state: string
    zip: string
    email: string
    password: string
}

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    nameOfPersonPlacingOrder: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
}


export function Checkout() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>){
        setData( prev => {
            return({...prev, ...fields})
        })
    }

    const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } = useMultistepForm(
        [
        <CompanyForm {...data} updateFields={updateFields}/>,
        <AddressForm {...data} updateFields={updateFields}/>,
        <AccountForm {...data} updateFields={updateFields}/>])

        function onSubmit(e: FormEvent){
            e.preventDefault()
            if (!isLastStep) return next()
            else alert("You have successfully placed your order.")
        }


    return ( 
     <div 
      style={{
        position: "relative", 
        background: "white",
        border: "1px green",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
    }}>
        <form onSubmit={onSubmit}>
            <div style = {{ position: "absolute", top: ".5rem", right: ".5rem"}}>
                {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div style={{marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
                {!isFirstStep && <Button 
                                        type= "button" 
                                        className="bg-success border-success" 
                                        style={{borderRadius: "5px"}} 
                                        onClick={back}><text 
                                        style={{color: "white"}}>
                    Back
                    </text></Button>}
                <button className="btn btn-success" 
                        style={{borderRadius: "5px"}} 
                        ><text 
                        style={{color: "white"}}
                        type="submit">
                    {isLastStep ? "Finish" : "Next"}
                    </text></button>
            </div>
        </form>
    </div>
)}