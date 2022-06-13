import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {connect} from "react-redux";
import {allDataActions} from "../redux/actions";

function Navbar ({getAllData}) {

    function handleClick () {

        const urls = [
            {group:'posts',srcPath:'https://jsonplaceholder.typicode.com/posts'},
            {group:'comments',srcPath:'https://jsonplaceholder.typicode.com/comments'},
           // {group:'albums',srcPath:'https://jsonplaceholder.typicode.com/albums'},
           // {group:'photos',srcPath:'https://jsonplaceholder.typicode.com/photos'},
        ];
        urls.map(url => {
            getAllData(url);
        })

    }

  return (
    <div className='navbar'>
      <div className='links_container'>
        <ul>
          <li><Link to='/'>Logo</Link></li>
          <li>
              <button
                  className='data_loader'
                  onClick={ () => handleClick()}>
                  Load Data
              </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        allData: state.allDataReducer.allData
    };
};

const mapDispatchToProps = dispatch => ({
    getAllData: (url) => dispatch(allDataActions.getAllData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);