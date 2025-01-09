import ContainerComponent from "../../components/ContainerComponent"
import { FormComponent } from "../../components/FormComponent"

export const Container=()=>{
    return (
        <div>
            <FormComponent/>
            <ContainerComponent/>
        </div>
    )
}