document.addEventListener("DOMContentLoaded", function () {
  // Get filter buttons
  const allButton = document.getElementById("all");
  const cseButton = document.getElementById("cse");
  const wddButton = document.getElementById("wdd");

  // Get all result buttons
  const resultButtons = document.querySelectorAll(".result-button button");

  // Create course count elements dynamically
  const courseCount = document.createElement("p");
  courseCount.classList.add("course-count");
  courseCount.textContent = `The total number of courses listed is ${resultButtons.length}`;
  courseCount.style.display = "none"; // Initially hidden
  document.body.appendChild(courseCount); // Add to page

  const filteredCount = document.createElement("p");
  filteredCount.classList.add("filtered-count");
  filteredCount.style.display = "none"; // Initially hidden
  document.body.appendChild(filteredCount); // Add to page

  // Function to filter courses
  function filterCourses(category) {
    let count = 0;

    resultButtons.forEach((button) => {
      const buttonText = button.textContent.trim().toUpperCase();

      if (category === "all" || buttonText.includes(category.toUpperCase())) {
        button.style.display = "block";
        count++;
      } else {
        button.style.display = "none";
      }
    });

    // Update the filtered courses count
    filteredCount.textContent = `The total number of courses listed below is ${count}`;
    filteredCount.style.display = count > 0 ? "block" : "none";

    // Show the total course count if all courses are displayed
    courseCount.style.display = category === "all" ? "block" : "none";
  }

  // Add event listeners to filter buttons
  if (allButton)
    allButton.addEventListener("click", () => filterCourses("all"));
  if (cseButton)
    cseButton.addEventListener("click", () => filterCourses("CSE"));
  if (wddButton)
    wddButton.addEventListener("click", () => filterCourses("WDD"));

  // Initialize by showing all courses
  filterCourses("all");
});
