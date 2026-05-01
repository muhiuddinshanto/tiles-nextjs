import Image from "next/image";

const TilesDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("http://localhost:3000/data.json");
    const datas = await res.json();

    const singleImage = datas.find((item) => item.id === id);

    if (!singleImage) {
        return <h2 className="text-center mt-10">Tile Not Found</h2>;
    }

    const {
        image,
        title,
        shortDescription,
        longDescription,
        category,
        material,
        dimensions,
        inStock,
        price,
    } = singleImage;

    return (
        <div className="container mx-auto px-4 py-10">

            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <div className="relative w-full aspect-square border rounded-xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div>

                    <h1 className="text-3xl font-bold mb-3">
                        {title}
                    </h1>

                    <p className="text-gray-600 mb-4">
                        {shortDescription}
                    </p>

                    <div className="space-y-2 mb-5">
                        <p><strong>Category:</strong> {category}</p>
                        <p><strong>Material:</strong> {material}</p>
                        <p><strong>Dimensions:</strong> {dimensions}</p>
                        <p>
                            <strong>Status:</strong>{" "}
                            {inStock ? "In Stock" : "Out of Stock"}
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-5">
                        ${price}
                    </h2>

                    <button className="btn btn-primary w-full">
                        Add to Cart
                    </button>

                </div>

            </div>
              <div className="divider"></div>
            <div className="mb-4">
                <h3 className="font-semibold mb-1">Description</h3>
                <p className="text-gray-600">{longDescription}</p>
            </div>

        </div>
    );
};

export default TilesDetails;