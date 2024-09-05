import React, { Component } from 'react';
import ProductList from './ecomm/ProductList';
import ShoppingCart from './ecomm/ShoppingCart';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { getList } from '../actions/userAction'

class EComm extends Component {
  render() {
    return (
      <div>
      <Card>
                

                <CardContent>
                    <Typography component="p">
                       
                    </Typography>

                    <TextField
                        id="search"
                        label="Search"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />

                    <Paper style={{
                            overflowX: 'auto',
                    }}>
                       
                    </Paper>
                </CardContent>

            
        <Grid container >

              
              <ProductList />
                 
              <ShoppingCart />
  
          </Grid>
          </Card>
      </div>
    );
  }
}

export default EComm;