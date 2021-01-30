import React, {Component} from 'react';
import axios from 'axios'


export default class Students extends React.Component {
    constructor () {
        super ()
        this.state = {
            students: []
        }
    }
    async componentDidMount () {
        try{
            const response = await axios.get('/student');
            this.setState ({
                students: response.data
            })
        } catch(err) {
            console.err(err);
        }
    }
    render() {
        return (
        <div>
            <h1>Students</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <tr>
                            {this.state.students.map((student)=>{
                                return (
                                    <tr key={student.id}>
                                        <td>{student.fullName}</td>
                                    </tr>
                                )
                            })}
                        </tr>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}




