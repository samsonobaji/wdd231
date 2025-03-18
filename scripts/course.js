// document.addEventListener("DOMContentLoaded", function () {
//   const courses = [
//     { name: "CSE 110", type: "CSE", completed: false },
//     { name: "WDD 130", type: "WDD", completed: true },
//     { name: "CSE 111", type: "CSE", completed: false },
//     { name: "CSE 210", type: "CSE", completed: true },
//     { name: "WDD 131", type: "WDD", completed: true },
//     { name: "WDD 231", type: "WDD", completed: false },
//   ];

//   const courseContainer = document.querySelector(".courses");
//   const allButton = document.getElementById("all");
//   const cseButton = document.getElementById("cse");
//   const wddButton = document.getElementById("wdd");

//   function displayCourses(filter = "All") {
//     courseContainer.innerHTML = ""; // Clear previous entries

//     courses
//       .filter((course) => filter === "All" || course.type === filter)
//       .forEach((course) => {
//         const button = document.createElement("button");
//         button.textContent = course.name;
//         button.classList.add(course.completed ? "completed" : "not-completed");
//         courseContainer.appendChild(button);
//       });
//   }

//   // Add event listeners to filter buttons
//   allButton.addEventListener("click", () => displayCourses("All"));
//   cseButton.addEventListener("click", () => displayCourses("CSE"));
//   wddButton.addEventListener("click", () => displayCourses("WDD"));

//   // Load all courses by default
//   displayCourses("All");
// });

document.addEventListener("DOMContentLoaded", function () {
  // Responsive Navigation Menu
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Footer - Display Current Year
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Footer - Display Last Modified Date
  document.getElementById("lastModified").textContent =
    "Last Update: " + document.lastModified;

  // Course List Array
  const courses = [
    { name: "CSE 110", type: "CSE", credits: 2, completed: true },
    { name: "WDD 130", type: "WDD", credits: 3, completed: true },
    { name: "CSE 111", type: "CSE", credits: 4, completed: false },
    { name: "CSE 210", type: "CSE", credits: 3, completed: true },
    { name: "WDD 131", type: "WDD", credits: 3, completed: false },
    { name: "WDD 231", type: "WDD", credits: 3, completed: false },
  ];

  function displayCourses(filter) {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";

    const filteredCourses =
      filter === "all"
        ? courses
        : courses.filter((course) => course.type === filter);

    filteredCourses.forEach((course) => {
      const courseDiv = document.createElement("div");
      courseDiv.classList.add("course-card");
      courseDiv.style.backgroundColor = course.completed
        ? "#d4edda"
        : "#f8d7da"; // Green for completed, red for incomplete

      courseDiv.innerHTML = `<strong>${course.name}</strong> - ${course.credits} Credits`;
      courseContainer.appendChild(courseDiv);
    });
  }

  // Initialize with all courses displayed
  displayCourses("all");

  // Filter buttons
  document.getElementById("filters").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      displayCourses(e.target.textContent);
    }
  });
});
