import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import SearchWebIcon from 'mdi-react/SearchWebIcon';
import ResultList from './components/ResultList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: false,
      searchValue: '',
      results: []
    };
  }  

  onSearch = () => {
    let val = this.state.searchValue
    if(val !== '') {
      this.handleSearch(val)
    } else {
      this.setState({searchField: !this.state.searchField})
    }
  }

  onSearchText = (e) => {
    this.setState({ searchValue: e.target.value })
    this.handleSearch(e.target.value)
  }

  handleSearch(searchTerm) {
    fetch(`https://cors.io/?http://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTerm}&format=json`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          results: result.query.search
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }

  render() {
    var search = this.state.searchField ? <TextField className='App-search'
                hintText="Type to search Wikipedia.."
                inputStyle={{color: '#FFF'}}
                hintStyle={{color: '#FFF'}}
                onChange={this.onSearchText.bind(this)}
                onSubmit={this.handleSearch.bind(this, this.state.searchValue)}
                value={this.state.searchValue}
              /> : null;
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src="https://dczii.github.io/images/logo-white.png" className="App-logo" alt="logo" />
          </div>
          <div className="App-body">
            <div>
              <FloatingActionButton onClick={this.onSearch}>
                <SearchWebIcon /> 
              </FloatingActionButton>
            </div>
            <div>
                {search}
            </div>
            {this.state.results ? 
              <ResultList results={this.state.results}/>
            : '' }
          </div>
          <div className="footer">
            Design and Codes by <a href="https://dczii.github.io/">DcZII</a>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
