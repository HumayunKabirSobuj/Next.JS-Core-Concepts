import ProductCard from "@/components/products/ProductCard";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache:"no-store"
  });
  const data = await res.json();
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-10">Products Page here</h1>
      <div className="grid grid-cols-3 gap-8  my-10 w-[90%] mx-auto">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
