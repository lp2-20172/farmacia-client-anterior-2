import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';

class Pedidos extends Component {
    render() {
        return (
    <Card>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" >
                   J&J
                </Avatar>
        }
            title="Enviar"
            subheader="Pedidos"
    />

                <TextField
                id="No.cliente"
                label="No.Cliente"                          
                type="number"
                />
                <br />
                <br />
                <TextField
                id="Nombre"
                label="Nombre"                          
                type="text"
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
                 id="text"
                 label="Ciudad"
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
                    id="text"
                    label="Pais"
                    type="text"                        
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
                    id="Email"
                    label="Email"
                    type="Email"                        
                />
                <br />
                <br />
                <TextField
                    id="CompraEn"
                    label="CompraEn"
                    type="CompraEn"                        
                />
                <br />
                <br />

                <Button color="primary" aria-label="add">
                <strong> ENVIAR </strong>
            </Button>    
                    
        </Card >
        );
    }
}


export default Pedidos;