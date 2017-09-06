import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(e){
        this.setState({ term : e.target.value });
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
    
     render(){
         return(
             <form onSubmit={ this.onFormSubmit } className='input-group'>
                 <input
                    className='form-control'
                    placeholder = 'get a five-day forcast for your favorite city'
                    value = {this.state.term}
                    onChange={ this.onInputChange }
                   />
                 <span className="input-group-btn">
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                 </span>
             </form>
         );
     }

}


function mapDispatchTopProps (dispatch) {
    return bindActionCreators ({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchTopProps)(SearchBar);
//null: why? no state needed 