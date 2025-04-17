document.addEventListener("DOMContentLoaded", () => {
  const recipeList = document.getElementById("recipe-list"); // The container for recipes
  const filterDropdown = document.getElementById("filter"); // For filtering recipes (if you add filtering functionality later)

  // Fetch and display recipes
  const loadRecipes = async () => {
    try {
      const response = await fetch("data/recipes.json"); // Fetch from JSON file
      if (!response.ok) {
        throw new Error("Failed to fetch recipe data.");
      }
      const recipes = await response.json();
      displayRecipes(recipes); // Call function to display recipes
    } catch (error) {
      console.error("Error loading recipes:", error);
      recipeList.innerHTML = `<p class="error-message">Failed to load recipes. Please try again later.</p>`;
    }
  };

  // Display recipes dynamically
  const displayRecipes = (recipes) => {
    recipeList.innerHTML = recipes
      .map((recipe) => {
        // Build steps list from recipe.steps array
        const steps = recipe.steps
          .map((step, index) => `<li>Step ${index + 1}: ${step}</li>`)
          .join("");

        // Return the HTML structure for each recipe
        return `
          <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <h4>Procedure:</h4>
            <ul>${steps}</ul>
          </div>
        `;
      })
      .join(""); // Join all recipes into one string
  };

  // Filter recipes based on dropdown selection
  const filterRecipes = (recipes, type) => {
    const filteredRecipes =
      type === "all"
        ? recipes
        : recipes.filter((recipe) => recipe.type === type); // Filter by type
    displayRecipes(filteredRecipes); // Display filtered recipes
  };

  loadRecipes(); // Initial load of recipes
});


  // Optional: Filter recipes by type (e.g., gluten-free, vegetarian)
  const filterRecipes = async (type) => {
    try {
      const response = await fetch("data/recipes.json");
      if (!response.ok) {
        throw new Error("Failed to fetch recipe data.");
      }
      const recipes = await response.json();
      const filteredRecipes =
        type === "all"
          ? recipes
          : recipes.filter((recipe) => recipe.type === type); // Filter by 'type'
      displayRecipes(filteredRecipes);
    } catch (error) {
      console.error("Error filtering recipes:", error);
      recipeList.innerHTML = `<p class="error-message">Failed to filter recipes. Please try again later.</p>`;
    }
  };

  loadRecipes(); // Initial load of recipes
});
