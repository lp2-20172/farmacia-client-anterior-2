import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '400',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
    
  },

});


class UsuarioList extends Component {
   render() {
        return (
            <Card>
                <CardHeader
                    title="DATOS"
                    subheader="CLIENTE"
                />
             
                    <TextField
                        id="Codigo"
                        label="Codigo"                        
                        type="number"
                    />
                    <TextField
                        id="precio"
                        label="DNI"                        
                        type="number"
                    />
                    <br />
                    <TextField
                        id="cantidad"
                        label="Nombre"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />
                     <TextField
                        id="cantidad"
                        label="Apellido"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />
                    <br />
                    
                    <CardHeader
                    title="DATOS"
                    subheader="VENTA"
                />
                   
                    <br />
                    <TextField
                        id="cantidad"
                        label="Nro"
                        defaultValue="Nro"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />  
                    <TextField
                        id="date"
                        label="FECHA"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                    />
                        <TextField
                          id="required"
                          label="ATENDIDO POR:"
                          defaultValue="JORGE GONSALES" 
                          margin="normal"
                        />
                        <TextField
                          id="required"
                          label="PRODUCTO"
                          defaultValue="Nombre" 
                          margin="normal"
                        />
                        <TextField
                          id="required"
                          label="PRECIO"
                          defaultValue="PRECIO" 
                          margin="normal"
                        />
                         <TextField
                        id="CANTIDAD"
                        label="CANTIDAD"                        
                        type="number"
                        marginLeft="10"
                    />
                    <br />
                    
                    <br />
                    <label>
                        TIPO DE COMPROVANTE
                        <select  onChange={this.handleChange}>
                            <option value="COMPROVANTE">COMPROVANTE</option>
                            <option value="TICKET">TICKET</option>
                            <option value="BOLETA">BOLETA</option>
                            <option value="FACTURA">FACTURA</option>
                        </select>
                        </label>
                        <br />
                        <br />
                    <Button raised color="primary" >
                            CONFIRMAR
                          </Button>
                          <Button raised color="accent" >
                            CANCELAR
                          </Button>
           

                
                <Typography type="subheading" color="secondary">
                
                <p><strong>LISTA DE VENTAS </strong></p>
                
                <Paper>
                        <Table classclassName="texto">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >CLIENTE</TableCell>
                                    <TableCell >PRODUCTO</TableCell>
                                    <TableCell >CANTIDAD</TableCell>
                                    <TableCell >IMPORTE</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                    <TableRow>
                                        <TableCell ></TableCell>                                        
                                    </TableRow>
                                
                            </TableBody>
                        </Table>
                    </Paper>

                </Typography>
                 </Card >
            
            
        );
    }
}
export default UsuarioList;