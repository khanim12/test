import { useState } from "react";
import {
  Alert,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useUserActions } from "../../queryhook/useUserActions";
import { UserType } from "../../types/userType";

const ContainerComponent = () => {
  const { useGetAllUser, addUser } = useUserActions();
  const { data, isLoading, error } = useGetAllUser();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const columns: readonly { label: string }[] = [
    { label: "Name" },
    { label: "Email" },
    { label: "Company" },
    { label: "ID" },
  ];

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

  if (isLoading) return <div>Yüklənir...</div>;
  if (error) return <div>Xəta baş verdi</div>;

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

      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.label}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item: UserType) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.company?.name}</TableCell>
                  <TableCell>{item.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ContainerComponent;
