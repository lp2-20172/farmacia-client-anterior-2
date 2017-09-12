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
          defaultValue="NOMBRE"
          onChange={event => this.setState({ name: event.target.value })}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          error
          id="error"
          label="Error"
          defaultValue="Hello World"
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
          id="multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChangeMultiline}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
        <TextField
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
        />
        <TextField
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
        />
        <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        />
        <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        
      <Button raised color="primary" className={classes.button}>
        CONFIRMAR
      </Button>
      <Button raised color="accent" className={classes.button}>
        CANCELAR
      </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);