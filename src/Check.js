import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
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

  class Check extends React.Component {
    constructor(props) {
      super(props);
      const words = props.words;
      
      this.state = {
        word: words[Math.floor(Math.random()*words.length)],
        answer: ""
      };
    }

  handleChange = event => {
    if (event.key === 'Enter'){ return; }
    document.getElementById("outlined-name").style.color = 'black';     
    this.setState({answer: event.target.value});
  };

  handleKeyPress = event => {
    if (event.key === "Enter"){
      const { word, answer } = this.state;
      const { words } = this.props;
      if (word === answer){
          this.setState({
            word: words[Math.floor(Math.random()*words.length)],
            answer: ""
          })
      }else{
          document.getElementById("outlined-name").style.color = 'red';
      }      
    }   
  }

  render(){
    const { classes } = this.props;
    const { word, answer } = this.state;

    return (
        <div className={classes.container} >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {word}
          </Typography>
          <TextField
            id="outlined-name"
            className={classes.textField}
            value={answer}
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

export default withStyles(styles)(Check);
