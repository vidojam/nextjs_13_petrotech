import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}; 

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}; 

const getDogData = async () => {
  // const res = await fetch("https://dog.ceo/api/breeds/image/random", {cache: "no-store"})
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 3, // photo change after 3 seconds
    }
  });
  return res.json()
}; 


export default async function ListOfPosts() {
  const [posts, users, dog] = await Promise.all([
    getPostsData(), 
    getUsersData(),
    getDogData(),
  ]);

  // console.log(users);
  // console.log(posts);

  return (
   <div>
    <Image src={dog.message} alt="dog" width={300} height={300}/>
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
