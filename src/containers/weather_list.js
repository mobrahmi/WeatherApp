import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

 class WeatherList extends Component {
     renderWeather(cityData){
         const name = cityData.city.name;
         const temps = cityData.list.map(weather => weather.main.temp);
         const pressure = cityData.list.map(weather => weather.main.pressure);
         const humidity = cityData.list.map(weather => weather.main.humidity);
         const { lon, lat } = cityData.city.coord; /// some destructing nothing to worry about here
    
       return (
           <tr key={ name }>
               <td><GoogleMap lon={lon} lat={lat} /></td> 
               <td> <Chart color="orange" data={temps} units="K"/> </td> 
               <td> <Chart color="blue" data={pressure} units="hPa" /> </td> 
               <td> <Chart color="red" data={humidity} units="%" /> </td> 
           </tr>
       );
     }
     render(){
         return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
         );
     }
 }

 function mapStateToProps({ weather }){  // es6 -> {weather} is = to const weather = state.weather
     return  { weather };  //-> {weather:weather}
 }

// connect our component with the function mapstatetoprops

export default connect (mapStateToProps)(WeatherList);