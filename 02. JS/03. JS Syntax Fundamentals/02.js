function student_info(name, age, grade) {
    console.log("Name: " + name + ", Age: " + age + ", Grade: " + grade.toFixed(2));
}

student_info('John', 15, 5.54678);
student_info('Steve', 16, 2.1426);
student_info('Marry', 12, 6.00);

function student_info_2(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

student_info_2('John', 15, 5.54678);
student_info_2('Steve', 16, 2.1426);
student_info_2('Marry', 12, 6.00);