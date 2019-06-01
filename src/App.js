import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import SearchWebIcon from 'mdi-react/SearchWebIcon';
import ResultList from './components/ResultList';

function App(props) {
  let [searchField, handleSearchField] = useState(false);
  let [searchValue, handleSearchValue] = useState('');
  let [results, handleResults] = useState([]);

  function onSearch() {
    let val = searchValue
    if(val !== '') {
      handleSearch(val)
    } else {
      handleSearchField(!searchField)
    }
  }

  function onSearchText(e) {
    handleSearchValue(e.target.value)
    handleSearch(e.target.value)
  }

  function handleSearch(searchTerm) {
    fetch(`https://cors.io/?http://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTerm}&format=json`)
    .then(res => res.json())
    .then(
      (result) => {
        handleResults(result.query.search)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  var search = searchField ? <TextField className='App-search'
      hintText="Type to search Wikipedia.."
      inputStyle={{color: '#FFF'}}
      hintStyle={{color: '#FFF'}}
      onChange={onSearchText.bind(this)}
      onSubmit={handleSearch.bind(this, searchValue)}
      value={searchValue}
    /> : null;

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src="https://dczii.github.io/images/logo-white.png" className="App-logo" alt="logo" />
          </div>
          <div className="App-body">
            <div>
              <FloatingActionButton onClick={() => onSearch()}>
                <SearchWebIcon /> 
              </FloatingActionButton>
            </div>
            <div>
                {search}
            </div>
            {results ? 
              <ResultList results={results}/>
            : '' }
          </div>
          <div className="footer">
            Design and Codes by <a href="https://dczii.github.io/">DcZII</a>
          </div>
        </div>
      </MuiThemeProvider>
    );

}

export default App;
