import { DataGrid } from "@mui/x-data-grid";
import { adminTableCoulmns } from "constants";
import { useEffect, useState } from "react";

const AdminPanel = ({ data }) => {
  const [row, setRows] = useState([]);
  useEffect(() => {
    const rows = Object.keys(data).map((email) => data[email]);
    setRows(rows);
  }, [data]);
  return (
    <DataGrid
      rows={row}
      columns={adminTableCoulmns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      getRowId={(row) => row.email}
    />
  );
};

export default AdminPanel;
