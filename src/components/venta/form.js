import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';

class form extends Component {
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
                        id="precio"
                        label="Codigo"                        
                        
                        type="number"
                    />
                    <br />
                    <TextField
                        id="cantidad"
                        label="Nombre"
                        
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="cantidad"
                        label="Precio"
                        type="number"
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
                        id="cantidad"
                        label="Cantidad"
                    /**value={this.props.q}
                        onChange={this.change}**/
                        margin="normal"
                    />  
                    <br />
                    <label>
                        Cual es tu favorito
                        <select className="form">
                            <option value="Habitacion">Habitacion</option>
                            <option value="Individual">Individual</option>
                            <option value="Matrimonial">Matrimonial</option>
                            <option value="Triple">Triple</option>
                        </select>
                        </label>
                        <br />
                    <Button fab color="primary" aria-label="add">
                        <AddIcon />
                    </Button>
                    <Button color="secondary" aria-label="add">
                        <strong> Cancelar </strong>
                    </Button>    
            </Card >
      
        );
    }
}

export default form;