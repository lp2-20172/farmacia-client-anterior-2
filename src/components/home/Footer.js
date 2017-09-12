import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography'

class Footer extends Component {
    render() {
        return (
            <CardContent>
               <Typography type="subheading" color="secondary">
                "farmaceuticos cumpliendo una funcion de servicio para el bienestar "
                <div>
                <p class="catsandstars">
                Bajamos aún más nuestros precios<br />Tu salud no es un privilegio, es tu derecho.
                Por eso bajamos aún más nuestros precios.   […]

                 </p>
                <p>la fuente de la salud es la responsabilidad del ayer.</p>
                <p class="catsandstars">
                Aquí encontrarás un espacio donde te daremos la mejor guía para ti<br />veanlo aqui!
                </p>
              <p>leer mas.</p>
             </div>
                </Typography>
            </CardContent>
        );
    }
}

export default Footer;