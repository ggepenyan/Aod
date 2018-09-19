const initialState = {
  students: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_STUDENTS':
      return {
        ...state,
        students: action.payload
      };
    case 'REMOVE':
      return {
        ...state,
        students: state.students.filter((item, index) => index !== action.payload)
      };
    case 'UPDATE':
      return {
        ...state,
        students: action.payload
      };
    default:
      return state;
  }
}
