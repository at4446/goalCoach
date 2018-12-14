import { SIGNED_IN} from '../constants';
//SET_GOALS, SET_COMPLETED 

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}