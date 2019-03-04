import { observable, action } from 'mobx';

class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;

  @action changeTitle = title => (this.title = title);
}

export default Todo;
