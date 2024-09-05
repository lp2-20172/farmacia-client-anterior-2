/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
//import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import FavoriteIcon from 'material-ui-icons/Favorite';

class About extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" >
                                FARMACENTER
                            </Avatar>
                        }
                        title="FARMACENTER "
                        subheader="September 2017"
                    />

                    <CardContent>
                        <Typography component="p">
                            si vosotros quereis tener mas tendencia compartid esta publicacion
                        </Typography>
                    </CardContent>
                    <center>
                    <CardActions>
                        

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Nombre</TableCell>
                                    <TableCell >Email</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                
                                    <TableRow >
                                        <TableCell numeric>1</TableCell>
                                        <TableCell >DAvid</TableCell>
                                        <TableCell >davidcskljgnv</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>

                    </CardActions>

                    </center>


                </Card>
            </div>
        );
    }
}

export default (About);