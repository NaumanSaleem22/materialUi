import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';


const useTableStyles = makeStyles({


    
    searchinputdiv:{
        padding:'20px 10px',
        fontFamily:' "Roboto",sans-serif'
    },
    searchinput: {
        background:'transparent',
        padding:'10px',
        border:'1px solid white',
        display:'flex',
        justifyContent:'flex-start',
        borderRadius:'5px',
        maxWidth:'300px',
        width:'100%',
        color:'white',
        fontFamily:' "Roboto",sans-serif'
    },
    tablefontColor_dark: {
        color: '#c5c4c4!important',
        padding:'10px!important',
        border:'none!important',
        fontFamily:' "Roboto",sans-serif'
    }, 

    tableBackgroundColor_dark:{
        background:'#242329',
     
       },
    
    tablePagination_dark:{
        background:"#242329!important",
        color:'#c5c4c4!important',
        fontFamily:' "Roboto",sans-serif'
    },
    tablefontColor_light: {
        color: '#c5c4c4!important',
        padding:'10px!important',
        border:'none!important'
       
    }, 

    tableBackgroundColor_light:{
        background:'#ffffff',
     
       },
    
    tablePagination_light:{
        background:"#ffffff!important",
        color:'#c5c4c4!important'

    },

    root: {
        "&::-webkit-scrollbar": {
          width: 7,
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "darkgrey",
          outline: `1px solid slategrey`,
        },
      },

})


const columns = [
    { id: 'name', label: '#', minWidth: 100 },
    { id: 'code', label: 'Date', minWidth: 100 },
    {
        id: 'population',
        label: 'Description',
        minWidth: 170,
     
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Incoming',
        minWidth: 170,
       
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Outgoing',
        minWidth: 170,
      
        format: (value) => value.toFixed(2),
    },
    {
        id: 'balance',
        label: 'Balance',
        minWidth: 170,
      
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size,balance) {
    const density = population / size;
    return { name, code, population, size, density,balance };
}




const rows = [
    { id: 1,date:20/11/2019, description: "Profit was returned according to 10% investment", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 2,date:20/11/2019, description: "30$ withdrawn from the account", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 3,date:20/11/2019, description: "Withdrawn request is currently being processed", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 4,date:20/11/2019, description: "Withdrawn request is currently being processed", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 5,date:20/11/2019, description: "Profit was returned according to 10% investment", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 6,date:20/11/2019, description: "Profit was returned according to 10% investment", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 7,date:20/11/2019, description: "30$ withdrawn from the account", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 8,date:20/11/2019, description: "Withdrawn request is currently being processed", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 9,date:20/11/2019, description: "Profit was returned according to 10% investment", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 10,date:20/11/2019, description: "30$ withdrawn from the account", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 11,date:20/11/2019, description: "Profit was returned according to 10% investment", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 12,date:20/11/2019, description: "Withdrawn request is currently being processed", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 13,date:20/11/2019, description: "Profit was returned according to 10% investment", incoming: "$245", outgoing: "$1", balance: "$500" },
    { id: 14,date:20/11/2019, description: "Withdrawn request is currently being processed", incoming: "$245", outgoing: "$1", balance: "$500" },

]

export default function ColumnGroupingTable() {

    const styleClasses = useTableStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div style={{padding:'10px 10px',background:'#242329',color:'#c5c4c4'}}>
        <div style={{textAlign:'left', padding:'0px 10px'}}>
         <h2>  Bonus Wallet History </h2> 
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </div>
        <div className={styleClasses.searchinputdiv}>
        <input className={styleClasses.searchinput} type="search" id="site-search" name="q"
         aria-label="Search through site content" Placeholder="Search"/>
        </div>
        <Paper sx={{ width: '100%' }}    >
            <TableContainer  className={[styleClasses.tableBackgroundColor_dark , styleClasses.root].join(' ')} sx={{maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                       
                        <TableRow >
                            {columns.map((column) => (
                                <TableCell 
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth ,background:'#242329',color:'white',textAlign:'center'}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell  className={styleClasses.tablefontColor_dark}  align="center">
                                            {row.id}
                                        </TableCell>
                                        <TableCell  className={styleClasses.tablefontColor_dark}   align="center">
                                            {row.date}
                                        </TableCell>
                                        <TableCell  className={styleClasses.tablefontColor_dark}  align="left">
                                            {row.description}
                                        </TableCell>
                                        <TableCell  className={styleClasses.tablefontColor_dark}   align="center">
                                            {row.incoming}
                                        </TableCell>
                                        <TableCell  className={styleClasses.tablefontColor_dark}  align="center">
                                            {row.outgoing}
                                        </TableCell>
                                        <TableCell  className={styleClasses.tablefontColor_dark}  align="center">
                                            {row.balance}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination className={styleClasses.tablePagination_dark}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>

        
            
        </div>
    );
}








