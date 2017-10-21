import { combineReducers } from 'redux'; // 导入登录的redux逻辑
import loginIn from './loginReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({  // 将所有的redux处理逻辑包装在一起
  loginIn: loginIn,
  counter: counter,
});

export default rootReducer;  // 导出，作为统一入口
