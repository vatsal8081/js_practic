export let studentData = []

export function addStudent(student) {
    studentData.push(student)
}

export const emptyStudentData = () => studentData = []

