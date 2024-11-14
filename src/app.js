document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const items = document.querySelectorAll(".filter__item");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    items.forEach((item) => {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchText)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
