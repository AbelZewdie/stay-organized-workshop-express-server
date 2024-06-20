async function getData() {
  const response = await fetch("http://localhost:8083/api/categories");
  const data = await response.json();
  console.log(data);
}
document.addEventListener("DOMContentLoaded", () => {
  getData();
});