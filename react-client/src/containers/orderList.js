import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';


class OrderList extends Component {
 
  render () {
    if (this.props.turnOrder.length === 0) {
      return null;
    }

    return(
      <Card.Group>
        <Card className='cards'>
          <Image />
          <Card.Content>
            <Card.Header>
              {this.props.turnOrder.name}
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
      </Card.Group>
      )
  }
}

function mapStateToProps (state) {
  return {
    turnOrder: state.turnOrder
  }
}

export default connect(mapStateToProps)(OrderList);




