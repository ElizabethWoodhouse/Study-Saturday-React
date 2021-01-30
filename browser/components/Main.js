import React, {Component} from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

export default class Students extends React.Component {
    constructor () {
        super ()
        this.state = {
            students: [],
            singleStudent : {}
        }
        this.selectStudent = this.selectStudent.bind(this);
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
    };
    selectStudent (student) {
        this.setState({ singleStudent : student });
    };
    render() {
        console.log('state in main', this.state);
        return (
        <div>
            <h1>Students</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Tests </th>
                    </tr>
                    <thread>
                        <StudentList students={this.state.students} selectStudent = {this.selectStudent} />
                    </thread>
                </tbody>
            </table>
            {this.state.singleStudent.id ? <SingleStudent chosenStudent = {this.state.singleStudent} />: null}
        </div>
        )
    }
}




