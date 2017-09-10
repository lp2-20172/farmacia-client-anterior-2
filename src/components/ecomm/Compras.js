import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';




class Compras extends Component {
    render() {
        return (
    <Card>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" >
                   J&J
                </Avatar>
        }
            title="Agregar"
            subheader="Compras"
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
                    id="Email"
                    label="Email"
                    type="Email"
                />
                <br />
                <br />
                <TextField
                    id="number"
                    label="Telefono"
                    type="number"
                />
                <br />
                <br />
                <TextField
                    id="text"
                    label="Provincia"
                    type="text"                        
                />
                <br />
                <br />
                <br />
               
                <TextField
                    id="text"
                    label="Poblacion"
                    type="text"                        
                />
                <br />
                <br />
                <TextField
                    id="codigo-postal"
                    label="Codigo"
                    type="number"                        
                />
                <br />
                <br />
                <TextField
                    id="Direccion"
                    label="Direccion"
                    type="text"                        
                />
                <br />
                <br />
                <TextField
                    id="date"
                    label="Date"
                    type="date"                        
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


export default Compras;