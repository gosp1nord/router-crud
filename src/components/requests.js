export function getContent(params) {
  let postId = '';
  if ('id' in params) {
    postId = params.id
  }
  fetch(`http://localhost:7070/posts/${postId}`, params.headers)
    .then((result) => {
        let answer;
        if (result.status === 200) {
        answer = result.json();
        }
        if (result.status === 204) {
          answer = "success";
        }
        return answer
    })
    .then((data) => {
      if (data) {
        params.callback(data)
      }
    })
}

