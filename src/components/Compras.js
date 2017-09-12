import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '400',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    margin:'normal',
  },

});

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    multiline: 'Controlled',
  };

  handleChangeMultiline = event => {
    this.setState({
      multiline: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="NOMBRE"
          className={classes.textField}
          defaultValue=""
          onChange={event => this.setState({ name: event.target.value })}
          margin="normal"
        />
        <TextField
          id="NUMERO"
          label="numero de compra"
          defaultValue=""
          className={classes.numberField}
          margin="normal"
        />
        <TextField
          required
          id="TIPO"
          label="tipo de documento"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        <TextField
          error
          id="empleado"
          label="empleado"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="proveedor"
          label="proveedor"
          multiline
          rowsMax=""
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="total"
          label="total"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        
        }}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        
      <Button raised color="primary" className={classes.button}>
        ENVIAR
      </Button>
      <Button raised color="accent" className={classes.button}>
        ABORTAR
      </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);