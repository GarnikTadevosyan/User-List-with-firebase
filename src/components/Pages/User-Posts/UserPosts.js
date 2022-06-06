import * as React from 'react';
import {useEffect, useState} from 'react';
import './UserPosts.css';
import PostComments from "./PostComments/PostComments";
import AddOrEditCmnt from "./AddOrEditCmnt/AddOrEditCmnt";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import {userActions} from "../../../redux/actions";
import Swal, {fire} from "sweetalert2";
/*------------------MUI imports-----------------*/
import {Accordion, AccordionSummary, AccordionDetails} from "../../MUI-Styles/MUI_Accordion";
import Typography from '@mui/material/Typography';

function UserPosts({posts, getPosts, getComments, comments, deleteComment, editComment, addComment}) {

    const {id} = useParams();
    const [activePostId, setActivePostId] = useState('');
    const [activeComment, setActiveComment] = useState({});
    const [commentValue, setCommentValue] = useState('');

    useEffect(() => {
        getPosts(id);
    }, []);


    function panelChange(id) {
        if (activePostId === id) {
            setActivePostId('')
        } else {
            getComments(id)
                .then(() => {
                    setActivePostId(id);
                });
        }
    }

    function commentDeleter(id) {
        return (
            Swal, fire,
                Swal.fire(
                    {
                        title: 'Are you sure to delete this comment ?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }
                )
                    .then((result) => {
                        if (result.isConfirmed) {
                            deleteComment(id).then(() => {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            })
                        }
                    })
        )
    }

    function commentEditer(comment) {
        setActiveComment(comment);
        setCommentValue(comment.body);
    }

    function addOrEditComment() {
        if (activeComment && activeComment.id) {
            editComment(activeComment)
        } else {
            const toAddcommentObj = {
                postId: activePostId,
                id: 1,
                name: 'Orinak Orinakyan',
                email: 'Orinak@mail.com',
                body: commentValue
            };
            addComment(toAddcommentObj);
        }
        setActiveComment({});
        setCommentValue('');
    }

    function handleChange(e) {
        let value = e.target.value;
        setCommentValue(value);
        setActiveComment((prev) => ({...prev, body: value}));
    }

    return (
        <div className='posts_wrapper'>
            <div className='posts_container'>
                {posts.map((post) => {
                    return (
                        <div className='post_item' key={post.id}>
                            <>
                                <Accordion
                                    expanded={activePostId === post.id}
                                    onChange={() => panelChange(post.id)}>
                                    <AccordionSummary>
                                        <Typography>{post.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {(comments.length && activePostId === post.id) &&
                                            <PostComments
                                                comments={comments}
                                                commentEditer={commentEditer}
                                                commentDeleter={commentDeleter}
                                            /> }
                                    </AccordionDetails>
                                </Accordion>
                            </>
                        </div>
                    )
                })
                }
                {activePostId && <div className='comment_adding_container'>
                        <AddOrEditCmnt
                            key={activeComment.id}
                            activeComment={activeComment}
                            commentValue={commentValue}
                            handleChange={handleChange}
                            addOrEditComment={addOrEditComment}
                        />
                    </div>}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.userReducer.posts,
        comments: state.userReducer.comments
    };
};

//Dispatchy kam StateProps-y karelia tal null

const mapDispatchToProps = dispatch => ({
    getPosts: (id) => dispatch(userActions.getUserPosts(id)),
    getComments: (id) => dispatch(userActions.getUserComments(id)),
    deleteComment: (id) => dispatch(userActions.deleteUserComment(id)),
    editComment: (comment) => dispatch(userActions.editUserComment(comment)),
    addComment: (comment) => dispatch(userActions.addUserComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);