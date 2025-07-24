import Link from "next/link";

const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const post = await getSinglePost(id);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://picsum.photos/seed/${post.id}/800/400`}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl">{post.title}</h1>
          <p className="mt-4 text-lg">{post.body}</p>
          <div className="card-actions justify-end mt-6">
            <Link href="/posts" className="btn btn-outline btn-primary rounded">
              ← Back to Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
