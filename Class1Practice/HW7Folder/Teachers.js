const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

const courseDetails = [
    {
        courseName : 'Automation',
        length : 6
    },
    {
        courseName : 'QA',
        length : 8
    },
    {
        courseName : 'Mobile',
        length : 12
    }
]

class Teachers extends Members {

    static #idValue = 0;

    #teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 5550,
        tCourseDetails : {
            courseName : '',
            courseLength : 0,
        }
    }

    
    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
    constructor(teacherName, teacherAge, teacherCountry, teacherCourseName) {
    super()
        if (teacherAge >= 21 && this.#isCourseNameValid(teacherCourseName) && teacherCountry.toLowerCase().localeCompare('usa') === 0) {
            const courseData = this.#isCourseNameValid(teacherCourseName)
            this.member.name = MyStringFunctions.toTitleCase(teacherName)
            this.member.age = teacherAge
            this.member.location = teacherCountry.toUpperCase()
            this.#teacher.tCourseDetails.courseName = courseData.courseName
            this.#teacher.tCourseDetails.courseLength = courseData.length;;
            this.#teacher.tId = ++Teachers.#idValue;
            console.log(`\nThank you for registering.\nYour id value is ${this.#teacher.tId}\n`);
        } else {
            console.log("\nDO NOT REGISTER");
        }
    }
    
    
    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
    
    
    
    showMyDetails() {
        console.log(`\nTeacher details:\nId: ${this.#teacher.tId}`)
        super.showMyDetails();
        console.log(`Course name: ${this.#teacher.tCourseDetails.courseName}`);
    }

changeTeachingCourse(newTeacherCourse) {

    const courseData = this.#isCourseNameValid(newTeacherCourse);
    if(this.#isCourseNameValid(newTeacherCourse) && this.teacher.tId !== 0){ // how to do != old course
        this.teacher.tCourseName = courseData.courseName;
        this.teacher.tSalary = courseData.salary;
        console.log(`\nTeacher course has been successfully changed to ${courseData.courseName}\n\nNew course details:`);
    }
    else if (!this.#isCourseNameValid(newTeacherCourse)){
        console.log('Invalid course name\nYour previously enrolled course details:');
    }
    else{
        console.log('You are already enrolled in the course');
    }
}

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
     addGrade(studentId, grade) {
        const checkStudent = accessStudentClass.isStudentIdValid(studentId);
        if (this.isStudentIdValid(studentId) && accessStudentClass.studentGrade === ''){
            accessStudentClass.studentGrade = '';
            console.log(`Grade is successfully added to student ID -> ${studentId}\n Grade -> ${grade}`);
        }
        else if(accessStudentClass.studentGrade!== ''){
            console.log('Remove grade from student');
        }
        else{
            console.log(`Invalid student ID`);

        }
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
     removeGrade(studentId) {
        const checkStudent = accessStudentClass.isStudentIdValid(studentId);
        if (this.isStudentIdValid(studentId) && accessStudentClass.studentGrade !== ''){
            accessStudentClass.studentGrade = '';
            console.log(`Grade is successfully removed from student ID -> ${studentId}`);
        }
        else if(accessStudentClass.studentGrade === ''){
            console.log('Student has no grade');
        }
        else{
            console.log(`Invalid student ID`);

        }
    }

}

module.exports = Teachers