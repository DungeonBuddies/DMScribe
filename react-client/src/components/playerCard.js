import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import playerSamples from '../../../sampleData/playerSamples'



const PlayerCard = (props) => (
  <Card>
    <Image />
    <Card.Content>
      <Card.Header>
        {playerSamples[0].name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Class/Race
        </span>
      </Card.Meta>
      <Card.Description>
          <p className='stats'>
            <span className='stat'>AC: {playerSamples[0].armor_class}</span>
            <span className='stat'>HP: {playerSamples[0].hit_points}</span>
            <span className='stat'>INIT: {playerSamples[0].init}</span>
          </p>
          <p className='stats'>
            <span className='stat'>PP: {playerSamples[0].perception}</span>
            <span className='stat'>SPD: {playerSamples[0].speed}</span>
          </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='address card outline' />
        More player info
      </a>
    </Card.Content>
  </Card>
)

export default PlayerCard;