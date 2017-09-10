import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';




class Proveedores extends Component {
    render() {
        return (
    <Card>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" >
                    Add
                </Avatar>
        }
            title="Agregar"
            subheader="Productos"
    />

                <TextField
                id="Nombre"
                label="Nombre"                        
                    
                type="text"
                />
                <br />
                <br />
                <TextField
                    id="Apellidos"
                    label="Apellidos"                        
                    
                    type="text"
                 />
                <br />
                <br />
    
                <TextField
                    id="text"
                    label="Empresa"
                />
                <br />
                <br />
                <TextField
                    id="number"
                    label="Direccion"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    id="number"
                    label="Documento de Identidad"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    id="text"
                    label="Ruc"
                    type="text"                        
                />
                <br />
                <br />
                <br />
                <TextField
                    id="date"
                    label=""
                    type="date"                        
                />
                <br />
                <br />
               
                <TextField
                    id="number"
                    label="Celular"
                    type="number"                        
                />
                <br />
                <br />
                <TextField
                    id="text"
                    label="Email"
                    type="email"                        
                />
                <br />
                <br />


                

                <Button color="primary" aria-label="add">
                <strong> Aceptar </strong>
            </Button>    
                <Button color="secondary" aria-label="add">
                    <strong> Cancelar </strong>
                </Button>    
        </Card >
        );
    }
}


export default Proveedores;