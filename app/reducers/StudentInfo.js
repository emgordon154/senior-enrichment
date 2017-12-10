import axios from 'axios'

const initialStudent = {}

const GOT_SELECTED_STUDENT = 'GOT_SELECTED_STUDENT'

const gotSelectedStudent = student => ({
  type: GOT_SELECTED_STUDENT,
  student
})

export const getSelectedStudentFromServer = studentId => (
  dispatch => (
    axios.get(`/api/student/${studentId}`)
    .then(res => res.data)
    .then(student => dispatch(gotSelectedStudent(student)))
    .catch(err => {
      console.log('uh oh lmao')
      console.error(err)
    })
  )
)

export default function reducer(student = initialStudent, action) {
  switch (action.type) {
    case GOT_SELECTED_STUDENT: return action.student

    default: return student
  }
}
