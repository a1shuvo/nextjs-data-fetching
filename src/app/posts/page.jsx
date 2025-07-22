const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 12); // Limit for display
};

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={`https://picsum.photos/seed/${post.id}/600/400`}
                alt="Post"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title.slice(0, 40)}...</h2>
              <p>{post.body.slice(0, 80)}...</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
