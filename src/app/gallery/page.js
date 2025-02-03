import Image from "next/image";
import nextImage from "@/assets/book.jpg";
import Navbar from "@/components/shared/Navbar";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Regular image tag</h1>
      <img
        className=" rounded-3xl mx-auto"
        src="https://i.ibb.co.com/JF7GZMG1/book-composition-with-open-book.jpg"
        height={400}
        width={400}
      />
      <h1>Nextjs image Component</h1>
      <Image
        className="mx-auto rounded-3xl"
        src={
          "https://i.ibb.co.com/JF7GZMG1/book-composition-with-open-book.jpg"
        }
        alt="books"
        height={400}
        width={400}
      />
      <h1>Local image</h1>
      <Image
        className="mx-auto rounded-3xl"
        src={nextImage}
        alt="books"
        height={400}
        width={400}
      />
    </div>
  );
};

export default GalleryPage;
