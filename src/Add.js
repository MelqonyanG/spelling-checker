import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
        marginLeft: '10px',
        marginRight: '10px',
        width: '100%'
      }
  };

  class Add extends React.Component {
    constructor(props) {
      super(props);     
      this.state = {
        word: ""
      };
    }

  handleChange = event => {
    if (event.key === 'Enter'){ return; }   
    this.setState({word: event.target.value});
  };

  handleKeyPress = event => {
    if (event.key === "Enter"){
        if (!this.props.words.includes(this.state.word) && this.state.word.length > 0){
            this.props.addWord(this.state.word);
        }
        this.setState({word: ""})        
    }   
  }

  render(){
    const { classes } = this.props;
    const { word } = this.state;

    return (
        <div className={classes.container} >
          <TextField
            id="outlined-name"
            className={classes.textField}
            value={word}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            autoFocus={true}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      )
  }
}

export default withStyles(styles)(Add);
