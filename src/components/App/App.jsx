import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state={
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (value) => {
        
        this.setState({
            headerExpanded: value.length > 0 ? false : true,
            suggestedNames: value ? name(value) : []
        })
    }

    render() {
        return(
            <div>
                <Header headerExpanded={this.state.headerExpanded}/>
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
} 

// function App() {
//     return (
//         <h1>THis is my functional component</h1>
//     )
// }
 export default App;
 