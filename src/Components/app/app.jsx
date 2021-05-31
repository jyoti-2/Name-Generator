import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Header from './../Header/Header.jsx';
import './app.css';

const name = require("@rstacruz/startup-name-generator");



class App extends React.Component
{
    state = {
        Headertext: "Name it!",
        HeaderExpanded: true,
        SuggestedNames:[]
    };

    handleInputChange = (InputText) => {
       
        this.setState({ HeaderExpanded: !(InputText > 0) , SuggestedNames: name(InputText)})
    };
    render()
    {
        return (
            <div>
               
                <Header
                    Headtitle={this.state.Headertext}
                    HeaderExpanded={this.state.HeaderExpanded}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer SuggestedNames={this.state.SuggestedNames}/>
            </div>
        );
    };
    
};



export default App;