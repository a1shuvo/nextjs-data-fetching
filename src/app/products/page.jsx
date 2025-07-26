const ProductsPage = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-xl border border-base-200"
          >
            <div className="card-body">
              <h2 className="card-title text-xl">{product.name}</h2>
              <p className="text-gray-600">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-gray-600">
                <strong>Price:</strong> ৳{product.price}
              </p>
              <p className="text-gray-600">
                <strong>Stock:</strong>{" "}
                {product.inStock ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-red-600">Out of stock</span>
                )}
              </p>
              <div className="mt-2">
                <strong>Tags:</strong>{" "}
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-sm mr-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Added on: {new Date(product.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
