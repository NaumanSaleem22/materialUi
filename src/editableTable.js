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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const useTableStyles = makeStyles({



    searchinputdiv: {
        padding: '20px 10px',
        fontFamily: ' "Roboto",sans-serif'
    },
    searchinput: {
        background: 'transparent',
        padding: '10px',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'flex-start',
        borderRadius: '5px',
        maxWidth: '300px',
        width: '100%',
        color: 'white',
        fontFamily: ' "Roboto",sans-serif'
    },
    tablefontColor_dark: {
        color: '#c5c4c4!important',
        padding: '10px!important',
        border: 'none!important',
        fontFamily: ' "Roboto",sans-serif'
    },

    tableBackgroundColor_dark: {
        background: '#242329',

    },

    tablePagination_dark: {
        background: "#242329!important",
        color: '#c5c4c4!important',
        fontFamily: ' "Roboto",sans-serif',
        padding: "15px 0px!important",
        display: "flex",
        justifyContent: "flex-start!important"
    },
    tablefontColor_light: {
        color: '#c5c4c4!important',
        padding: '10px!important',
        border: 'none!important'

    },

    tableBackgroundColor_light: {
        background: '#ffffff',

    },

    tablePagination_light: {
        background: "#ffffff!important",
        color: '#c5c4c4!important'

    },
    Tableheading: {
        fontSize: "26px",
        fontWeight: "500",
        padding: "0px",
        margin: "0px",
        color: "white"

    },
    Tabletext: {
        fontSize: "16px",
        margin: "0px",
        padding: "0px",
        color: "white"

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

const ariaLabel = { 'aria-label': 'description' };
 

function createData(name, username, ReferenceID, FirstName, LastName, PhoneNumber, Rank, Category, Email, DOJ, Status, action) {

    return { name, username, ReferenceID, FirstName, LastName, PhoneNumber, Rank, Category, Email, DOJ, Status, action };
}




const rows = [
    { id: 1, UserName: "abc124", ReferenceID: "123414", FirstName: "Nouman", LastName: "Saleem", PhoneNumber: "0343142342", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 2, UserName: "Salman23", ReferenceID: "56665", FirstName: "Salman", LastName: "Salam", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 3, UserName: "Jami1234", ReferenceID: "2224235", FirstName: "Jami", LastName: "Raza", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 3, UserName: "Obaix23432", ReferenceID: "3444534", FirstName: "Obaiz", LastName: "Khan", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 5, UserName: "HassanCutes", ReferenceID: "13512", FirstName: "Hassan", LastName: "Cutie", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 1, UserName: "abc124", ReferenceID: "123414", FirstName: "Nouman", LastName: "Saleem", PhoneNumber: "0343142342", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 2, UserName: "Salman23", ReferenceID: "56665", FirstName: "Salman", LastName: "Salam", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 3, UserName: "Jami1234", ReferenceID: "2224235", FirstName: "Jami", LastName: "Raza", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 3, UserName: "Obaix23432", ReferenceID: "3444534", FirstName: "Obaiz", LastName: "Khan", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 5, UserName: "HassanCutes", ReferenceID: "13512", FirstName: "Hassan", LastName: "Cutie", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 1, UserName: "abc124", ReferenceID: "123414", FirstName: "Nouman", LastName: "Saleem", PhoneNumber: "0343142342", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 2, UserName: "Salman23", ReferenceID: "56665", FirstName: "Salman", LastName: "Salam", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 3, UserName: "Jami1234", ReferenceID: "2224235", FirstName: "Jami", LastName: "Raza", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 3, UserName: "Obaix23432", ReferenceID: "3444534", FirstName: "Obaiz", LastName: "Khan", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },
    { id: 5, UserName: "HassanCutes", ReferenceID: "13512", FirstName: "Hassan", LastName: "Cutie", PhoneNumber: "34234", Rank: "50", Category: "A", Email: "abc@gmail.com", DOJ: "11/12/2021", Status: "active" },

]

export default function ColumnGroupingTable() {
    const [anchorEl, setAnchorEl] = React.useState(null);



    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

     


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
        <div style={{ padding: '10px 10px', background: '#242329', color: '#c5c4c4' }}>
            <div style={{ textAlign: 'left', padding: '0px 10px' }}>
                <p className={styleClasses.Tableheading}>  Manage Customers </p>
             
            </div>
            <div className={styleClasses.searchinputdiv}>
                <input className={styleClasses.searchinput} type="search" id="site-search" name="q"
                    aria-label="Search through site content" Placeholder="Search" />
            </div>
            <Paper sx={{ width: '100%' }}    >
                <TableContainer className={[styleClasses.tableBackgroundColor_dark, styleClasses.root].join(' ')} sx={{ maxHeight: 800 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >

                            <TableRow >
                              
                                    <TableCell style={{ minWidth: '100px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                       # <KeyboardArrowDownIcon/>
                                    </TableCell>
                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                       User Name
                                    </TableCell>
                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Reference Id
                                    </TableCell>
                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                    First Name
                                    </TableCell>
                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Last Name
                                    </TableCell>
                                    <TableCell style={{ minWidth: '140px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Phone Number
                                    </TableCell>
                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Rank  <KeyboardArrowDownIcon/>
                                    </TableCell>

                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Category  <KeyboardArrowDownIcon/>
                                    </TableCell>
                                    <TableCell style={{ minWidth: '140px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Email 
                                    </TableCell>

                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      DOJ <KeyboardArrowDownIcon/>
                                    </TableCell>

                                    
                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Status 
                                    </TableCell>

                                    <TableCell style={{ minWidth: '120px', background: '#242329', color: 'white', textAlign: 'center' }}  >
                                      Action 
                                    </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.id}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.UserName}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.ReferenceID}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.FirstName}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.LastName}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.PhoneNumber}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                      
                                                        <NativeSelect
                                                            className="inputfield-edit"
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'uncontrolled-native',
                                                            }}
                                                        >
                                                            <option value={"Iron"}>Iron</option>
                                                            <option value={"Copper"}>Copper</option>
                                                            <option value={"Silver"}>Silver</option>
                                                            <option value={"Gold"}>Gold</option>
                                                            <option value={"Platinium"}>Platinium</option>
                                                        </NativeSelect>
                                                    </FormControl>
                                                </Box>
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                            <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                       
                                                        <NativeSelect
                                                            className="inputfield-edit"
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'uncontrolled-native',
                                                            }}
                                                        >
                                                            <option value={"A"}>A</option>
                                                            <option value={"B"}>B</option>
                                                            <option value={"C"}>C</option>
                                                            <option value={"D"}>D</option>
                                                          
                                                        </NativeSelect>
                                                    </FormControl>
                                                </Box>
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.Email}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                {row.DOJ}
                                            </TableCell>
                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                     
                                                        <NativeSelect
                                                           className="inputfield-edit"
                                                            inputProps={{
                                                                name: 'age',
                                                                
                                                                id: 'uncontrolled-native',
                                                            }}
                                                        >
                                                            <option value={10}>Blocked</option>
                                                            <option value={20}>Unblocked</option>

                                                        </NativeSelect>
                                                    </FormControl>
                                                </Box>
                                            </TableCell>

                                            <TableCell className={styleClasses.tablefontColor_dark} align="center">
                                                <Button
                                                    id="basic-button"
                                                    aria-controls="basic-menu"
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    disableRipple="true"
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon />
                                                </Button>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                </Menu>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination className={styleClasses.tablePagination_dark}
                    rowsPerPageOptions={[25, 50, 100]}
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








