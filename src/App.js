import React from 'react';
import Search from './Search';
import {monuments} from './Monuments';
import MonuList from './MonuList';
import "./App.css";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            monuments: monuments,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filtered = this.state.monuments.filter(monuments =>{
            return(
                monuments.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        })
        if(this.state.monuments.length==0){
            return <h1 className="f-5"> &nbsp; Loading...</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="tc f-5 shadow-5-l">Seven wonders of the World</h1>
                    <Search searchChange = {this.onSearchChange} className="tc"/>
                    <div className="tc">
                        <MonuList monuments={filtered}/>
                    </div>
                </div>
            );
        }
        
    }    
}

export default App;