import * as types from '../constants/loginTypes';

const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: null,
}

export default function loginIn(state=initialState, action) {
  switch (action.type) {
    case types.LOGIN_IN_DOING:
      return {
        ...state,
        status: 'ログイン中',
        isSuccess: false,
        user: null,
      }
      break;
    case types.LOGIN_IN_DONE:
      return {
        ...state,
        status: '登録成功',
        isSuccess: true,
        user: action.user,
      }
      break;
    case types.LOGIN_IN_ERROR:
      return {
        ...state,
        status: 'エラー出す',
        isSuccess: true,
        user: null,
      }
      break;
    default:
    console.log(state);
      return state;
  }
}