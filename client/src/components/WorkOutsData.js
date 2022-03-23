import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const WorkOutsData = (props) =>{



const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'workOuts', headerName: 'Work Out', width: 300 },
  { field: 'bodyPart', headerName: 'Body Part', width: 300 },
] 
const rows = props.workout.map((workout)=>{
  const workOut = workout.workOut
  const bodyPart = workout.bodyPart
  const newRow = {...workOut, bodyPart}
  return newRow
})

return (
  <div style={{ height: 650, width: '100%' }}>
      <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
      />
  </div>
)
}


export default WorkOutsData