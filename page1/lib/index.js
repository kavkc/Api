const postList = document.querySelector("#posts");
const btnPosts = document.querySelector("#btn-posts");
const btnPostsAlphabetically = document.querySelector("#btn-posts-alphabetically");
const btnPostsUserid = document.querySelector("#btn-posts-userid");
const btnClearAll = document.querySelector("#btn-posts-clear");
const btnAudio = document.querySelector("#btn-audio");

btnClearAll.addEventListener("click", event => {
  postList.innerHTML = "";
})

btnPosts.addEventListener("click", event => {
  event.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      postList.innerHTML = "";
      data.forEach((result) => {
        console.log(result);
        const posts =`<li>
                        <p>
                          <strong>Title:</strong> ${result.title} <br>
                          <strong>Content:</strong> ${result.body}
                        </p>
                      </li>`;
        postList.insertAdjacentHTML("beforeend", posts);
      });
    });
});

btnPostsAlphabetically.addEventListener("click", event => {
  event.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const arrPosts = data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
      });
      postList.innerHTML = "";
      arrPosts.forEach((result) => {
        const postsAlph = `<li>
                            <p>
                              <strong>Title:</strong> ${result.title} <br>
                              <strong>Content:</strong> ${result.body}
                            </p>
                          </li>`;
        console.log(postsAlph);
        postList.insertAdjacentHTML("beforeend", postsAlph);
      });
    });
});

btnPostsUserid.addEventListener("click", event => {
  event.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const arrUserid = data.sort((a, b) => {
        if (a.userId < b.userId) {
          return -1;
        }
      });
      postList.innerHTML = "";
      let previousUserid = 0;
      const postsUserid = "";
      arrUserid.forEach((result) => {
        if (result.userId == previousUserid) {
          const postsUserid =`<li class="userContainer">
                                <p>
                                  <strong>Title:</strong> ${result.title} <br>
                                  <strong>Content:</strong> ${result.body}
                                </p>
                              </li>`;
          postList.insertAdjacentHTML("beforeend", postsUserid);
        } else {
          const postsUserid = `<strong class="user">User: ${result.userId}</strong>
                              <li class="userContainer">
                                <p>
                                  <strong>Title:</strong> ${result.title} <br>
                                  <strong>Content:</strong> ${result.body}
                                </p>
                              </li>`;
          postList.insertAdjacentHTML("beforeend", postsUserid);
        };
        previousUserid = result.userId;
        // console.log(postsUserid);
      });
    });
});

btnAudio.addEventListener("click", event => {
  // location.replace("file:///Users/kavitha/Documents/Api/audio/index.html");
  window.location.href=("../audio/index.html");
});
