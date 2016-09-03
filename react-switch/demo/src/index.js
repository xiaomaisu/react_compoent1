import React,{Component} from 'react'
import {render} from 'react-dom'
import Switch from '../../src'

class Demo extends Component {
  state = {loading: false}

  handleToggleLoading = () => {
    this.setState({loading: !this.state.loading})
  }

  render() {
    return <div>
      <h1>react-loading-button Demo</h1>

      <h2>Static</h2>
      <Switch disabled={true}>Load</Switch>
      <Switch checked={true}>Loading</Switch>

      <h2>Dynamic</h2>
      <Switch loading={this.state.loading}>
        {this.state.loading ? 'Loading' : 'Load'}
      </Switch>
      <button type="button" onClick={this.handleToggleLoading}>
        Toggle Loading
      </button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#root'))
