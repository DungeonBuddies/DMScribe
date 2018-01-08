import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import {connect} from 'react-redux';

class OrderCard extends Component {
  render () {
    return (
        <div>
          {console.log(this.props.turnOrder)}
          {this.props.turnOrder.map((card, index) => {
            console.log(this.props.turnOrder)
            return (
              <Card key={index} className='cards'>
                <Image />
                <Card.Content>
                  <Card.Header>
                    {card.name}
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
          })}
        </div>
      )
  }

}

function mapStateToProps (state) {
  return {
    turnOrder: state.turnOrder
  }
}

export default connect(mapStateToProps)(OrderCard);