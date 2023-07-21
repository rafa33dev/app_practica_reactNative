// recorrer todos los posts de los usuarios
export const arrayPosts = (data) => {
  const userPosts = data?.GetUsers?.flatMap(user => {
    return user?.posts?.map(post => {
      const { name } = user;
      const { id, title, content,  commentCount } = post;
      return {id, name, title, content ,  commentCount};
    });
  }) ?? [];
return {
  userPosts
}
}
