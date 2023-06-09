
import React from 'react';
import CardComponent from "@/components/CardComponent";

export const metadata = {
    title: 'Category',
    description: "Our website is designed to provide you with comprehensive information about our exceptional product and its features.",
    locale: 'en-US',
    manifest: '/manifest.json',
    type: 'website',
    siteName: 'DinoShop',
    category: 'product',
    openGraph:{
        title: 'Category - DinoShop',
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


export async function getCategoryDetail(id,name) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=25&offset=0
`);
    const data = await res.json();
    return data;
}

async function Page({ params }) {
    const { id } = params;
    console.log(id);
    const productsWithCategory = await getCategoryDetail(id);
    console.log(productsWithCategory);

    return (
        <>
            <div className="flex min-h-screen flex-wrap items-center justify-between p-24">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                        Category: {productsWithCategory.length > 0 ? productsWithCategory[0].category.name : ''}
                    </h1>
                </div>
                {productsWithCategory.length > 0 ? (
                    <div className="flex min-h-screen flex-wrap items-center justify-between p-18">
                        {productsWithCategory.map((product) => (
                            <CardComponent
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.images[0]}
                                price={product.price}
                                category={product.category.name}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-2xl text-gray-900 dark:text-white">No products available</p>
                )}
            </div>
        </>
    );
}



export default Page;