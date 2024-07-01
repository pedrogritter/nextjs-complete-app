import styles from "./postUser.module.css";

// FETCH DATA WITH API
const getUserData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching user");
  }
  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getUserData(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.name}>{user.name}</span>
    </div>
  );
};

export default PostUser;
