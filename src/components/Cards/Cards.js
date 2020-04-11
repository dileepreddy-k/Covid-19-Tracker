import React from 'react';

import CountUp from 'react-countup';

import { Card, Header, Grid, Label } from 'semantic-ui-react';

const Cards = (props) => {
    
    const data = props.data;

    if( !data.confirmed ){
        return false;
    }

    return (

        <Grid columns={3} stackable>
            <Grid.Row>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Header as='h2'>Infected</Header>
                        </Card.Content>
                        <Card.Content>
                            <Header as="h3">
                                <CountUp start={0} end={data.confirmed.value} duration={1} separator=','/>
                            </Header>
                        </Card.Content>
                        <Label size="medium">Last Updated: {new Date(data.lastUpdate).toDateString()}</Label>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Header as='h2'>Recovered</Header>
                        </Card.Content>
                        <Card.Content>
                            <Header as="h3">
                                <CountUp start={0} end={data.recovered.value} duration={1.5} separator=','/>
                            </Header>
                        </Card.Content>
                        <Label size="medium">Last Updated: {new Date(data.lastUpdate).toDateString()}</Label>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Header as='h2'>Deaths</Header>
                        </Card.Content>
                        <Card.Content>
                            <Header as="h3">
                                <CountUp start={0} end={data.deaths.value} duration={2} separator=','/>
                            </Header>
                        </Card.Content>
                        <Label size="medium">Last Updated: {new Date(data.lastUpdate).toDateString()}</Label>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Cards;