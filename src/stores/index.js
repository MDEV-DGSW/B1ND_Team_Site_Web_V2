import LoginStore from './Login';
import TodoStore from './Todo';

const stores = {
  LoginStore: new LoginStore(),
  TodoStore: new TodoStore()
}

export default stores;