// recorrer todos los posts de los usuarios
export const arrayPosts = (data) => {
  const userPosts = data?.GetUsers?.flatMap(user => {
    return user?.posts?.map(post => {
      const { name } = user;
      const { title, content } = post;
      return { name, title, content };
    });
  }) ?? [];
return {
  userPosts
}
}
