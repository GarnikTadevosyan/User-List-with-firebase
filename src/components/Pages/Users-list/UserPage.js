import './UserPage.css'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { userActions } from "../../../redux/actions";

function UserPage({ users, getUsers }) {

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="user_list">
            {users.map((user) => {
                return (
                    <div className='user_card' key={user.id}>
                          <div className='user_avatar'>
                             <img src='images/avatar.png' />
                          </div>
                          <div className='user_info'> 
                            <ul>
                               <li><span>Name:</span> {user.name}</li>
                               <li><span>Email:</span> {user.email}</li>
                               <li><span>City:</span> {user.address.city}</li>
                               <li><span>Street:</span> {user.address.street}</li>
                               <li><span>Suite:</span> {user.address.suite}</li>
                               <li><span>Phone:</span> {user.phone}</li>
                               <li><span>Website:</span> {user?.website}</li>
                               <li><span>Company: </span> {user?.company?.name}</li>
                            </ul>
                        </div>
                        <div className='user_list_btn_container'>
                            <button  id='posts_shower' >
                                <NavLink
                                to={`/posts/${user.id}`}>
                                Show posts
                                </NavLink>
                            </button>
                            <button 
                                id='albums_shower'>
                                <NavLink 
                                to={`/albums/${user.id}`}>
                                Show albums
                                </NavLink>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
    };
};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(userActions.getUsers()),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

