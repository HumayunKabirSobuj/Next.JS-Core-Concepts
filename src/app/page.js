import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  // console.log("Data => ,", data);
  return (
    <div>
      <h1 className="text-4xl text-center">
        Data Fatching , caching and Revalidating
      </h1>
      <div className="grid grid-cols-3 gap-8  my-10 w-[90%] mx-auto">
        {data.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Link href={'/products'} className="bg-green-500 py-1 px-2 rounded-3xl text-white">View More</Link>
      </div>
    </div>
  );
};

export default HomePage;
