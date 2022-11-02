export const getPost = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const resp = await fetch(url);
  const post = await resp.json();

  return post;
};
