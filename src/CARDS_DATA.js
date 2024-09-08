import course from "./assets/course.png";
import mentor from "./assets/course_with_mentor.png";
import mentors from "./assets/mentor.png";

export default [
  {
    id: 1,
    title: "Course Only",
    description: "Only course without a direct mentor",
    img: course,
    price: 30,
    advantages: ["Full Course", "Well Structured Course", "Free Articles"],
  },
  {
    id: 2,
    title: "Course & Mentor",
    description: "Course wit direct mentor",
    img: mentor,
    price: 60,
    advantages: [
      "Full Organized Course",
      "Mentor Answer Any Question",
      "Free Articles",
    ],
  },
  {
    id: 3,
    title: "Course & Mentors",
    description: "Course wit mentors",
    img: mentors,
    price: 90,
    advantages: [
      "Full Detailed & Organized Course",
      "Mentors & Community",
      "Ultimate Resources",
    ],
  },
];
