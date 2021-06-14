import react from 'react';
import ListGroup from 'react-bootstrap/ListGroup'




class Weather extends react.Component{
   
render(){ 
    return(
    <ListGroup>{
     this.props.allWeatherData.map(value =>{
         return <ListGroup.Item>{value.weather.description}</ListGroup.Item>
       
       
     
     })
}
      </ListGroup>





    );
}
}

export default Weather;




















