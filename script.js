const formBox = document.getElementById("formBox");
const postsContainer = document.getElementById("posts");

function toggleForm() {
  formBox.style.display = formBox.style.display === "block" ? "none" : "block";
}

function addPost() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) {
    alert("Please fill in all fields");
    return;
  }

  const postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="delete-btn" onclick="deletePost(this)">Delete</button>
  `;

  postsContainer.prepend(postDiv);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  formBox.style.display = "none";
}

function deletePost(button) {
  button.parentElement.remove();
}
