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
import { UserType } from "../../types/userType";

const ContainerComponent = () => {
  const { useGetAllUser } = useUserActions();
  const { data, isLoading, error } = useGetAllUser();

  const columns: readonly { label: string }[] = [
    { label: "Name" },
    { label: "Email" },
    { label: "Company" },
    { label: "ID" },
  ];

  if (isLoading) return <div>Yüklənir...</div>;
  if (error) return <div>Xəta baş verdi</div>;

  return (
    <div>
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
