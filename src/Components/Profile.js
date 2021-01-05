import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../Redux/actions'

const Profile = (props) => {
    const deleteHandler = () => {
        let location = props.routerProps.history
        location.replace("/home")
        props.deletingUser(props.user.id)
    }

    return(
        <>
            <h1>Profile</h1>
            <h3>Username: {props.user.username}</h3>
            <h4>Email: {props.user.email}</h4>
            <button>Edit User</button>
            <button onClick={deleteHandler} >Delete User</button>
        </>
    )
}

function msp(state){
    return { 
        user: state.user
    }
}

function mdp(dispatch){
    return {
        deletingUser: (userId) => {dispatch(deleteUser(userId))}
    }
}

export default connect(msp, mdp)(Profile)