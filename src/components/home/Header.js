import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// import './Header.css';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'


class Header extends Component {
	render
	
	()
	 {
        return (
			
            <CardContent>
				
                <Typography type="headline">
				<div id="slideShowImages">
                <img src="farmacenter" alt="Slide 1" />
                
               </div> 
				
                    
                </Typography>
				
		
		


            </CardContent>
        );
    }
}

export default Header;

