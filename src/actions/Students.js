import axios from '../axios';

export function getStudents() {
  return dispatch => {
    return axios.get('students/students').then(res => {
      if (res.status === 200) {
        dispatch({
          type: 'SET_STUDENTS',
          payload: res.data
        });
      }
    }).catch(error => console.log(error));
  }
}
