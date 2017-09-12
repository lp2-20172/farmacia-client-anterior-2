import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


import { getList } from '../actions/userAction'
import { connect } from 'react-redux'

class User extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    render() {
        const {FlatButtonExampleSimple} = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe">
                            A
                            </Avatar>
                    }
                    title="Lista"
                    subheader="Almacen"/>

                     <Typography component="p">
                        Lista de Medicamentos/Productos{this.props.q}
                    </Typography>

                    <TextField
                        id="search"
                        label="Buscar Producto"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />  
                    <TextField
                        id="search"
                        label="Buscar Producto"
                        /**value={this.props.q}
                        onChange={this.change}**/
                        margin="normal"
                    />
             
                    
                    
                    <Button label="Secondary" secondary={true}>
                        <strong>Buscar</strong>
                    </Button>
                    <Button label="Default" aria-label="add">
                        <strong>+Agregar Nuevo</strong>
                    </Button>   

                    <Paper style={{
                            overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Codigo</TableCell>
                                    <TableCell >Descripcion</TableCell>
                                    <TableCell >Cantidad Total</TableCell>
                                    <TableCell >Venta Unitaria</TableCell>
                                    <TableCell >Opciones</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                
                                    <TableRow >
                                        <TableCell numeric>203</TableCell>
                                        <TableCell >antianalgesico</TableCell>
                                        <TableCell >100</TableCell>
                                        <TableCell >$ 3.50</TableCell>
                                        <TableCell ><Button label="Default" aria-label="add">
                        <strong>Editar</strong>
                    </Button></TableCell>
                                    </TableRow>
                            
                            </TableBody>
                        </Table>
                    </Paper> 
            </Card >


        );
    }
}

User.propTypes = {
    list: PropTypes.array
}

function mapStateToProps(state) {
    return {
        list: state.user.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getList: (q) => { dispatch(getList(q)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)