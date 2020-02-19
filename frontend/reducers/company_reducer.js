import {
  RECEIVE_COMPANY, RECEIVE_COMPANIES,
  RECEIVE_COMPANY_HISTORIC_PRICES,
  RECEIVE_COMPANY_BASICS
} from '../actions/company_actions';

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return Object.assign({}, state, { [action.company.id]: action.company });
    case RECEIVE_COMPANIES:
      return Object.assign({}, action.companies);
    case RECEIVE_COMPANY_HISTORIC_PRICES:
      return Object.assign({}, state, { [action.id]: action.prices });
    case RECEIVE_COMPANY_BASICS:
      return Object.assign({}, state, { [action.id]: action.company_data })
    default:
      return state;
  }
}

export default companiesReducer;