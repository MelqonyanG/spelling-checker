import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import View from './View';
import Add from './Add';
import Check from './Check';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [], 
      value: 0
    };
  }

  componentDidMount(){
    fetch('/words.txt')
    .then((r) => r.text())
    .then(text  => {
      this.setState({words: text.split('\n')});
    }) 
    
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  }

  addWord = (word) => {
    const { words } = this.state;
    words.unshift(word);
    this.setState({words: words})   
  }

  render() {
    const { classes } = this.props;
    const { value, words } = this.state;
     return (
      <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#D6DBDF'}}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Դիտել ամբողջ ցուցակը" />
          <Tab label="Ստուգել" />
          <Tab label="Ավելացնել" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
        <View words={words} />
      </TabContainer>}
      {value === 1 && <TabContainer>
        <Check words={words} />
      </TabContainer>}
      {value === 2 && <TabContainer>
        <Add words={words} addWord={this.addWord}/>
      </TabContainer>}
    </div>
    );
  }
}

export default withStyles(styles)(App);