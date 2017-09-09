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
        label="Proveedor"                        
        
        type="label"
    />
    <br />
    <br />
    <TextField
                    id="cantidad"
                    label=""
                    type="date"                        
                />
                <br />
                <TextField
                    id="text"
                    label="Empresa"
                    label="Empresa"
                    label="Empresa"
                    label="Empresa"
                    value={this.props.q}
                    onChange={this.change}
                    margin="normal"
                />
                <br />
    </Card>
        );
    }
}

export default Proveedores;