import axios from 'axios'

const initialStudents = []

const GOT_STUDENTS = 'GOT_STUDENTS'

const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
})


export const getStudentsFromServer = () => {
  return dispatch => (
    axios.get('/api/student')
      .then(res => res.data)
      .then(students => dispatch(gotStudents(students)))
      .catch(err => {
        console.log('uh oh lmao')
        console.error(err)
      })
    )
}

const DELETED_STUDENT = 'DELETED_STUDENT'

const deletedStudent = studentId => ({
  type: DELETED_STUDENT,
  studentId
})


export const deleteStudentOnServer = studentId => {
  return dispatch => {
    axios.delete(`/api/student/${studentId}`)
    // .then(res => res.data)
    .then(() => dispatch(deletedStudent(studentId)))
    .then(() => dispatch(getStudentsFromServer()))
    .catch(err => {
      console.log('uh oh lmao')
      console.error(err)
    })
  }
}

const STUDENT_CREATED = 'STUDENT_CREATED'

export const studentCreated = createdStudent => ({
  type: STUDENT_CREATED,
  createdStudent
})

const STUDENT_UPDATED = 'STUDENT_UPDATED'

export const studentUpdated = updatedStudent => ({
  type: STUDENT_UPDATED,
  updatedStudent
})

export default function reducer(students = initialStudents, action) {
  switch (action.type) {
    case GOT_STUDENTS: return action.students

    case STUDENT_CREATED:
      return students
                .concat(action.createdStudent)
                  .sort((studentA, studentB) => studentA.id - studentB.id)

    case STUDENT_UPDATED:
      let updatedStudentIndex = students.findIndex(
        student => +student.id === +action.updatedStudent.id)
      return students.slice(0, updatedStudentIndex)
              .concat(
                action.updatedStudent,
                students.slice(updatedStudentIndex + 1)
              )

    case DELETED_STUDENT:
      return students
        .filter(student => student.id !== action.studentId)

    default: return students
  }
}
