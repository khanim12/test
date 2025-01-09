import { useState } from "react";
import { useUserActions } from "../../queryhook/useUserActions";
import { UserType } from "../../types/userType";
import { Alert, Button, TextField } from "@mui/material";

export const FormComponent=()=>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const {addUser}=useUserActions()

    const handleSubmit = () => {
        const newUser: UserType = {
          name,
          email,
          company: { name: company },
          id: Math.random(),
        };
    
        addUser.mutate(newUser, {
          onSuccess: () => {
            <Alert variant={"filled"} color="success">
              Success
            </Alert>;
          },
          onError: () => {
            <Alert variant={"filled"} color="error">
              error
            </Alert>;
          },
        });
    
        setName("");
        setEmail("");
        setCompany("");
      };
    
    return (
        <div>
      <TextField
        label="Ad"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Şirkət"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained">
        İstifadəçi Əlavə Et
      </Button>

        </div>
    )
}