// import React,{useState} from 'react'
// import {useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { FaEdit, FaEye, FaPlusCircle, FaTrash, FaUser } from "react-icons/fa";
import "./dashboard_css.css";
import Button from "@material-ui/core/Button";
// let sentences;
const Dashboard = () => {
//     const [myData, setMyData] = useState([{}])
//     useEffect(() => {
//       fetch('http://localhost:9999/dashboard').then(
//         response => response.json()
//       ).then(sentences => setMyData(sentences.myData))
//       console.log("Hello",sentences.myData)
//     }, []);


  return (
    <>
        <nav>
            <NavLink to="/">
            <p>Authoring Interface</p>
            </NavLink>
            <div>
            <ul id="navbar">
                <li>
                <NavLink to="/dashboard">
                    <FaUser></FaUser> Username : user1
                </NavLink>
                </li>
                <li>
                <NavLink to="/logout">Logout </NavLink>
                </li>
            </ul>
            </div>
        </nav>

        <div class="components">
            <div class="cards">
            <div id="card">5 Discourses created</div>
            <div id="card">25 USRs Generated</div>
            <div id="card">2 Discourses Approved</div>
            <div id="card">
                <a href="http://localhost:3000/usrgenerate">
                <FaPlusCircle size="50px" color="black"></FaPlusCircle>
                </a>
            </div>
            </div>

            <div class="discourse_but">
            <Button variant="contained" href="http://localhost:9999/dash_out">
                See Discourses
            </Button>
            </div>

            <div class="dis_table">
            <table>
                <tr>
                <th>S.No</th>
                <th>Discourse</th>
                <th>USRs</th>
                <th>Actions</th>
                <th>Status</th>
                </tr>

               
                {/* {myData.map((item) => (
                    <tr>
                        <td>1</td>
                        {item.map((d) => (
                            <td>{d}</td>
                        ))}
                        <td></td>
                        <td></td> 
                    </tr>
                ))} */}

                {}
                <tr>
                
                <td>1</td>
                <td></td>
                <td></td> 
                <td>
                    <button class="but">
                    <a href="http://localhost:3000/usrgenerate">
                        <FaEye size="30px" color="black"></FaEye>
                    </a>
                    </button>
                    <button class="but">
                    <a href="http://localhost:3000/usrgenerate">
                        <FaEdit size="30px" color="black"></FaEdit>
                    </a>
                    </button>
                    <button>
                    <a href="http://localhost:3000/usrgenerate">
                        <FaTrash size="30px" color="black"></FaTrash>
                    </a>
                    </button>
                </td>
                <td>Approved</td>
                </tr>
            </table>
            </div>
        </div>
    </>
  );
};

export default Dashboard;