import Image from "next/image";
import Link from "next/link";
import style from "./post.module.css";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 12); // Limit for display
};

export const metadata = {
  title: "All Posts",
  description: "Loading JSON placeholder posts using server component.",
};

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className="p-4">
      <h2 className={`text-3xl font-bold text-center mb-6 ${style.postHeader}`}>
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <figure>
              <Image
                src={`https://picsum.photos/seed/${post.id}/600/400`}
                alt="Post"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className={`card-title ${style["post-title"]}`}>
                {post.title.slice(0, 40)}...
              </h2>
              <p>{post.body.slice(0, 80)}...</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/posts/${post.id}`}
                  className="btn btn-primary rounded"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
