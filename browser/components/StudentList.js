import React, {Component} from 'react';

const StudentList = (prop) =>{
    const students = prop.students;
    return (
        <tr>
            {students.map((student) => {
                return (
                    <tr key={student.id}>
                        <td>{student.fullName}</td>
                        <td onClick ={()=> prop.selectStudent(student)}>Details</td>
                    </tr>
                );
            })}
        </tr>
    );
};

export default StudentList;