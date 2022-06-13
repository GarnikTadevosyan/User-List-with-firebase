import './UserPage.css'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import {userActions} from "../../../redux/actions";
import {getAuth,signOut} from "@firebase/auth";
import { useNavigate } from "react-router-dom";

function UserPage({ users, getUsers, authUser }) {

    useEffect(() => {
        getUsers()
    }, []);

    let navigate = useNavigate();

    function handleLogOut() {
             const auth = getAuth();
             signOut(auth).then( () => {
                console.log('Sign outed');
                 navigate("/", { replace: true });
             }).catch((error) => {
                 console.log(error);
             });
    }

    return (
        <div className="user_list">
            {users && users.length > 0 && users.map((user, index) => {
                return (
                    <div className='user_card' key={index}>
                          <div className='user_avatar'>
                             <img src='images/avatar.png' />
                          </div>
                          <div className='user_info'> 
                            <ul>
                               <li><span>Name:</span> {user.name}</li>
                               <li><span>Email:</span> {user.email}</li>
                               <li><span>Adress:</span> {user?.country} {user?.city}</li>
                               <li><span>Phone:</span> {user?.phoneNumber}</li>
                                {user && authUser &&  authUser.uid && user.id == authUser.uid &&
                                ( <button
                                       onClick={ () => handleLogOut(authUser.uid) }
                                   >
                                       <b>Log Out</b>
                                   </button> ) }
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
        authUser: state.userReducer.authUser
    };
};

const mapDispatchToProps = dispatch => ({
      getUsers: () => dispatch(userActions.getUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

