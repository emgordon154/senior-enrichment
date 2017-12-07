import axios from 'axios'

const initialStudents = []

const GOT_STUDENTS = 'GET_STUDENTS'

const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
})

export const getStudentsFromServer = () => {
  return dispatch => {
    axios.get('/student')
      .then(res => res.data)
      .then(students => dispatch(gotStudents(students)))
  }
}

export default function reducer(students = initialStudents, action) {
  switch (action.type) {
    case GOT_STUDENTS: return action.students

    default: return students
  }
}
