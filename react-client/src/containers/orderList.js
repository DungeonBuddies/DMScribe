import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';


class OrderList extends Component {
 
  render () {
    if (this.props.turnOrder.length === 0) {
      return null;
    }

    return(
      <div>
        <Card.Group>
          {this.props.turnOrder.map((card, index) => {
                  return (
                      <Card key={index} className='cards'>
                        <Card.Content>
                          <Card.Header>
                            {card.name} 
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                            Turn number {index + 1}
                            </span>
                          </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            <Icon name='mouse pointer' />
                            Drag me!
                          </a>
                        </Card.Content>
                      </Card>
                    )
                })}
        </Card.Group>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    turnOrder: state.turnOrder
  }
}

export default connect(mapStateToProps)(OrderList);




