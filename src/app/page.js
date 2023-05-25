import CardComponent from "@/components/CardComponent";
import CategoryComponent from "@/components/CategoryComponent";

export const metadata = {
    title: 'Home ',
    description: "Our website is designed to provide you with comprehensive information about our exceptional product and its features.",
    locale: 'en-US',
    manifest: '/manifest.json',
    type: 'website',
    siteName: 'DinoShop',
    category: 'education',
    openGraph:{
        title: 'Home - DinoShop',
        description: " Our website is designed to provide you with comprehensive information about our exceptional product and its features.",
        url: '/',
        siteName: 'DinoShop',
        images: [
            {
                url: "/og-dino.jpg",
                width: 700,
                height: 500,
            },
        ]
    },
}


//Product API
export async function getData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=32&offset=0")
    const data = await res.json();
    return data;
}


//category API
export async function getCategoryList() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories?limit=8&offset=0")
    const categoryData = await res.json();
    return categoryData;
}


export default async function Home() {

    const product = await getData();
    const categorys = await getCategoryList();
    return (
        <>

            <div className="container mx-auto mt-16">
                <h1 className="text-center font-bold  mb-10 text-2xl text-red-700"> CATEGORY </h1>
                <div className="my-4 mt-10-6  flex-row grid grid-cols-4 gap-4">

                    {categorys.map((categories) => (
                        <CategoryComponent
                            key={categories.id}
                            id={categories.id}
                            catename={categories.name}
                            cateimage={categories.image}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h1 className="text-center font-bold  mt-10 text-2xl text-red-700 "> PRODUCT  </h1>
            <div className={"flex min-h-screen flex-wrap items-center justify-between container mx-auto "}>
                {product.map((products) => (
                    <CardComponent
                        key={products.id}
                        id={products.id}
                        title={products.title}
                        image={products.images}
                        price={products.price}
                        category={products.category.name}

                    />
                ))}
            </div>
            </div>
        </>

    );
}
