import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountrySelector from './components/CountrySelector/CountrySelector';

import { Container, Header } from 'semantic-ui-react';

import fetchData from './api/index';

import './App.css';

class App extends React.Component {

    state = {
        data: {},
        country: 'Global'
    }

    async componentDidMount() {
        const data = await fetchData();
        
        this.setState({
            data
        });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ 
            data, 
            country: country 
        });
    }

    render() {
        const { data, country } = this.state;
        
        return (
            <Container>
                <Header as="h1" textAlign="center">
                    <Header.Content>COVID-19 Tracker</Header.Content>
                </Header>
                <Cards data={data}/>
                <CountrySelector handleCountryChange={this.handleCountryChange}/>
                <Chart country={country} data={data}/>
            </Container>
        )
    }
}

export default App;