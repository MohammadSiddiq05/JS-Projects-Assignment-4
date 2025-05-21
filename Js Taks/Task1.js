const students = [
  { name: "siddiq shah", course: "web development", enrollmentDate: "2025-02-18" },
  { name: "bilal ahmend", course: "data science", enrollmentDate: "2025-03-21" },
  { name: "yasir khan", course: "graphic design", enrollmentDate: "2025-04-15" }
];

const enrollmentProcess = (students, courseStartDateStr) => {
  const courseStartDate = new Date(courseStartDateStr);

  const capitalizeWords = (word) => {
    return word
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const summary = students.map(student => {
    const formattedName = capitalizeWords(student.name);
    const formattedCourse = capitalizeWords(student.course);

    let fee = 0;
    switch (student.course.toLowerCase()) {
      case "web development":
        fee = 200;
        break;
      case "data science":
        fee = 250;
        break;
      case "graphic design":
        fee = 150;
        break;
      default:
        console.log(`Invalid course for ${formattedName}`);
        return null;
    }

    const enrollmentDate = new Date(student.enrollmentDate);
    const diffInDays = Math.floor((courseStartDate - enrollmentDate) / (1000 * 60 * 60 * 24));
    if (diffInDays > 30) {
      fee *= 0.9; 
    }

    const today = new Date();
    const durationSinceEnrollment = Math.floor((today - enrollmentDate) / (1000 * 60 * 60 * 24));

    return {
      name: formattedName,
      course: formattedCourse,
      fee: `$${fee.toFixed(2)}`,
      enrolledDaysAgo: `${durationSinceEnrollment} days ago`

    };
  });

  return summary; 
};

const result = enrollmentProcess(students, "2025-05-01");
console.log(result);
