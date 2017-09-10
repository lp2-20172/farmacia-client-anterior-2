import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';

import './Fonts.css';
class Footer extends Component {
    render() {
        return (
            <CardContent>
                <Typography type="subheading" color="secondary">
                "farmaceuticos cumpliendo una funcion de servicio"
                <div><a></a>
                <p class="catsandstars">
                <br /> 
                 Comparte Salud

                 Comparte Salud es una asociación civil sin fines 
                 de lucro que tiene como objetivo desarrollar programas asistenciales y obras sociales
                 que beneficien a las personas que más lo necesitan. 
                 Su misión es promover la ayuda social entre peruanos y canalizarla a los más necesitados y así, 
                 compartir más salud entre ellos.
                 </p>
                <p>Aquí encontrarás un espacio donde te daremos la mejor guía para ti, 
                tus preparativos para la llegada de tu lindo bebé, el cuidado de tu pequeño 
                en el transcurso de sus días y el bienestar y felicidad de toda tu familia.
                Entérate de más ingresando aquí.
                </p>
                <p class="catsandstars">
                Súmate a nuestro equipo

                <br />Nuestra misión es llevar con calidez y optimismo: salud, 
                bienestar y ahorro a todas las comunidades del Perú. 
                Esto es posible gracias a nuestros más de 11,000 colaboradores a nivel nacional, 
                quienes día a día viven nuestros valores y nuestra visión de cambiar la historia 
                de la salud en todas las comunidades donde operemos, a través de la mejor calidad, 
                el mejor precio y la mejor gente. ¡Tú también sé parte de este gran equipo!
                </p>
              <p>leer.mas</p>
             </div>
                </Typography>
                <Typography>
                <a href="http://inkafarma.bumeran.com.pe/index.bum" class="ver-mas" target="new">Leer más</a>
                </Typography>
                
            </CardContent>
        );
    }
}

export default Footer;