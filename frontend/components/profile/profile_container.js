import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import Profile from './profile'

const mstp = (state) => {
  return{
    currentUser: state.entities.id
  }
}

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout()).then(() => this.props.history.push("/"))
  }
}

export default connect(mstp, mdtp)(Profile);
