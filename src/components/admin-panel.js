import { DataGrid } from "@mui/x-data-grid";
import { adminTableCoulmns } from "constants";

const rows = [
  { id: 1, name: "Snow" },
  { id: 2, name: "Lannister" },
  { id: 3, name: "Lannister" },
  { id: 4, name: "Stark" },
  { id: 5, name: "Targaryen" },
  { id: 6, name: "Melisandre" },
  { id: 7, name: "Clifford" },
  { id: 8, name: "Frances" },
  { id: 9, name: "Roxie" },
];

const AdminPanel = () => {
  return (
    <DataGrid
      rows={rows}
      columns={adminTableCoulmns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};

export default AdminPanel;
