"use client"
import React from 'react';
import SliderComponent from "@/components/SliderComponent";
import {usePathname} from "next/navigation";
import Image from "next/image";

async function getProductDetails(id) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id} `);
    const data = await res.json();
    return data;
}
export async function generateMetadata({ params }) {
    const { id } = params;
    const product = await getProductDetails(id);
    return {
        title: product.title,
        description: product.description,
        metadataBase: new URL("https://istad.co"),
        alternates: {
            canonical: "/", // canonical mean the original page
            languages: {
                "en-US": "/en-US",
                "de-DE": "/de-DE",
            },
        },
        openGraph: {
            images: product.images[0],
        },
    };
}

export default async function ProductDetails({ params }) {

    const { id } = params;
    const product = await getProductDetails(id);
    return (
<>

        <div className="flex min-h-screen flex-wrap items-center justify-between p-20  ">
            <h1 className={"text-2xl font-bold tracking-tight text-gray-900 dark:text-white"}>PRODUCT DETAIL : {product.id}</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4 bg-gray-50  ">
                <div className="row-span-3">
                    <a
                        href="#"
                        className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        {product.images && (
                            <Image unoptimized
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-none md:rounded-l-lg"
                                src={product.images}
                                alt=""
                            />
                        )}
                    </a>
                </div>
                    <div className="col-span-2">
                        <h5 className="mb-2 text-2xl text-center  font-bold tracking-tight text-gray-900 dark:text-white my-6">
                            {product.title ? product.title : "Not Available"}
                        </h5>
                    </div>
                        <div className="row-span-2 col-span-2 text-center   ">

                                <p className=" my-12 font-normal   text-gray-700 dark:text-gray-400 text-center  ">
                                    {product.description ? product.description : " Description Null 🚫"}
                                </p>
                        </div>
                    </div>


        </div>
</>
    );
}