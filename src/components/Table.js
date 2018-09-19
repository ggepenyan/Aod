import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { getStudents } from "../actions/Students";

class Table extends Component {
  componentDidMount(){
    this.props.getStudents();
  }

  render(){
    return (
      <table className="table">
        <thead>
          <tr>
            <th>фото</th>
            <th className="right-border">дата рождения</th>
            <th>класс</th>
            <th>телефон</th>
            <th>email</th>
            <th>идентификатор</th>
            <th>дата приема</th>
            <th>из класса</th>
            <th>из школы</th>
            <th>учебный год</th>
            <th>в школу</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((student, index) =>
            <tr key={index}>
              <td>
                <img src={student.photo_url} alt="student thumbnail"/>
              </td>
              <td className="right-border">
                {moment(student.birth_date).format("DD.MM.YY")}
              </td>
              <td>
                {student.klass}
              </td>
              <td>
                {student.phone}
              </td>
              <td>
                {student.email}
              </td>
              <td>
                {student.identifiers_presence === true && 'Есть'}
              </td>
              <td>
                {moment(student.invite_date).format("DD.MM.YY")}
              </td>
              <td>
                {student.movement_from_klass}
              </td>
              <td>
                {student.movement_from_school}
              </td>
              <td>
                {student.movement_from_year}
              </td>
              <td>
                {student.movement_to_school}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.Students.students
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getStudents(){
      dispatch(getStudents())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
