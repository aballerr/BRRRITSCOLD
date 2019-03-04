import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Todo')
@observer
class TestDos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Todo } = this.props;
    console.log(this.props);
    // const { changeTitle } = Todo;
    // console.log(changeTitle('my title '));
    console.log();

    return <div>{Todo.title}</div>;
  }
}

export default TestDos;
