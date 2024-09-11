// Conditional rendering -> allows you to control what gets rendered in your application based on certain conditions
import PropTypes from "prop-types"
function UserGreeting(props){
    const welcomePage = <h2>Welcome {props.username}</h2>
    const notLoggedIn = <h2>Please log in to continue</h2>

    if(props.isLoggedIn){
        return(
            <div>
                {welcomePage}
            </div>
        )
    }
    else{
        return(
            <div>
                {notLoggedIn}
            </div>
        )
    }
}
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username:PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting