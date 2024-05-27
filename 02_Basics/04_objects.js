//De-structuring the objects

const course = {
    course_name : "JAVASCRIPT",
    course_price : "10000",
    course_instructor : "YOUTUBE" 
}

console.log(course.course_instructor)

//In some cases we have to use the object attributes many time, so in those cases we have a different syntax to make the code look more clean

const {course_instructor} = course //Now instead of 'course.course_instructor' we can write only 'course_instructor'
console.log(course_instructor);

const {course_instructor : instructor} = course //More clean
console.log(instructor)