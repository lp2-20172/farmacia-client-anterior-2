import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';
class Footer extends Component {
    render() {
        return (
            <CardContent>
                <Typography type="subheading" color="secondary">
                "farmaceuticos cumpliendo una funcion de servicio"
                <div>
                <p class="catsandstars">
                This paragraph is full of cats<br />and stars.
                 </p>
                <p>This paragraph is not.</p>
                <p class="catsandstars">
                Here are more cats for you.<br />Look at them!
                </p>
              <p>And no more.</p>
             </div>
                </Typography>
                
            </CardContent>
        );
    }
}

export default Footer;