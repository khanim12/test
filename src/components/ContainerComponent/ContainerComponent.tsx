import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useUserActions } from "../../queryhook/useUserActions";

const ContainerComponent = () => {
  const { useGetAllUser } = useUserActions();
  const { data } = useGetAllUser();
  console.log(data);

  interface Column {
    label: string;
  }

  const columns: readonly Column[] = [
    { label: "Name" },
    { label: "Email" },
    { label: "Company" },
    { label: "ID" },
  ];

  interface itemType {
    name: string;
    id: number;
    email: string;
    company: { name: string }; 
  }

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
              {data?.map((item: itemType) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.company.name}</TableCell>
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
