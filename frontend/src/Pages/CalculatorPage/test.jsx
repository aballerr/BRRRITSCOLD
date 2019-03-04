import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Todo')
@observer
class PassageTextContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }

  handleChange = () => {
    const { Todo } = this.props;

    const { changeTitle } = Todo;
    let { val } = this.state;
    this.setState({ val: val + 1 }, () => {
      console.log('changing...');
      changeTitle(this.state.val);
    });
  };

  render() {
    return <button onClick={this.handleChange}>Change</button>;
  }
}

export default PassageTextContainer;
