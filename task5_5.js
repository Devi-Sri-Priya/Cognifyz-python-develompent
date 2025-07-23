//task5_5.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        displayPosts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;
      postElement.appendChild(postTitle);
  
      const postBody = document.createElement('p');
      postBody.textContent = post.body;
      postElement.appendChild(postBody);
  
      postsContainer.appendChild(postElement);
    });
  }