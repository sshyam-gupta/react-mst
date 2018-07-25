import React from 'react'
import { storiesOf } from '@storybook/react'

class Home extends React.Component {
  render() {
    return <h1>asasdasd</h1>
  }
}

storiesOf('Home', module).add('to Storybook', () => <Home />)
