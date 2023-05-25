
import React from 'react';
import Image from "next/image";

function CategoryComponent({id,catename,cateimage}) {
    return (
        <div>
            {/*<div className="container mx-auto">*/}
            {/*    <ul className=" ">*/}
            {/*        <li>*/}
            {/*            <a  href={`/categorys/${id}`}*/}
            {/*                className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"*/}
            {/*            >*/}
            {/*                <img className="rounded-full w-10 h-10" src={cateimage? cateimage:"placeholder.png"} alt=" image"/>*/}

            {/*                <span className="ml-3 flex-1 whitespace-nowrap">{catename? catename:"unknown"}</span>*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*</div>*/}

            <div
                className="w-full max-w-sm p-4 bg-white  rounded-lg  sm:p-6 dark:bg-gray-800 ">

                <ul className="my-4 space-y-3">
                    <li>
                        <a href={`/categorys/${id}`}
                           className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <Image unoptimized  width={500} height={500} className="rounded-full w-10 h-10" src={cateimage? cateimage:"placeholder.png"} alt=" image"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">{catename? catename:"unknown"}</span>
                        </a>
                    </li>


                </ul>

            </div>

        </div>
    );
}

export default CategoryComponent;