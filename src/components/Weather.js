import react from 'react';
import Table from 'react-bootstrap/Table';
class Weather extends react.Component {
    render() {
        console.log(this.props.weatherData);
        return (
            <Table striped bordered hover style={{'margin-top':'2%'}}>
                <thead>
                    <tr>
                        <th>Forcast</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.weatherData[0].description}</td>
                        <td>{this.props.weatherData[0].date}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
export default Weather;