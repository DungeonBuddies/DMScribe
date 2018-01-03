import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import monsterSamples from '../../../sampleData/monsterSamples'



const MonsterCard = (props) => (
  <Card className='cards'>
    <Image />
    <Card.Content>
      <Card.Header>
        {monsterSamples[0].name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Class/Race
        </span>
      </Card.Meta>
      <Card.Description>
          <p className='stats'>
            <span className='stat'>AC: {monsterSamples[0].armor_class}</span>
            <span className='stat'>HP: {monsterSamples[0].hit_points}</span>
            <span className='stat'>INIT: {monsterSamples[0].init}</span>
          </p>
          <p className='stats'>
            <span className='stat'>STR: {monsterSamples[0].perception}</span>
            <span className='stat'>DEX: {monsterSamples[0].dexterity}</span>
            <span className='stat'>CON: {monsterSamples[0].constitution}</span>
          </p>
          <p className='stats'>
            <span className='stat'>WIS: {monsterSamples[0].wisdom}</span>
            <span className='stat'>CHA: {monsterSamples[0].charisma}</span>
          </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='address card outline' />
        More monster info
      </a>
    </Card.Content>
  </Card>
)

export default MonsterCard;