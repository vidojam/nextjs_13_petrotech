const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}; 

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}; 


export default async function ListOfPosts() {
  const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);

  console.log(users);
  return (
   <div>
    {posts.map((post: any) => {
      return <p>{posts.title}</p>;
      })}

      <div>
        {users.map((user: any) => {
          return <p>{user.name} </p>;
        })}
      </div>
   </div>
  );
}
