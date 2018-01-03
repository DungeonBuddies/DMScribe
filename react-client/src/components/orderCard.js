import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const OrderCard = (props) => (
  <Card>
    <Image />
    <Card.Content>
      <Card.Header>
        {playerSamples[0].name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Turn number
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='address card outline' />
        Drag Me!
      </a>
    </Card.Content>
  </Card>
)

export default OrderCard;