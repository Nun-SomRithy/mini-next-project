import React from 'react';
import {Carousel} from "flowbite-react";
import {usePathname} from "next/navigation";
import Image from "next/image";

function SliderComponent(props) {
    const pathName= usePathname();
    if (pathName.includes("/product")){
        return null;
    } if (pathName.includes("/categorys")){
        return null;
    }
    if (pathName.includes("/user")){
        return null;
    }
    return (

        <div className="h-96 md:h-96 xl:h-full 2xl:h-96 my-12 ">
            <Carousel
                leftControl={false}
                rightControl={false}
            >

                <Image unoptimized className="object-cover h-full w-full"
                    src="https://ps.w.org/bdthemes-prime-slider-lite/assets/banner-772x250.png?rev=2802047"
                    alt="..."
                />
                <Image unoptimized className="object-cover h-full w-full"
                    src="https://www.elementpack.pro/wp-content/uploads/2019/10/Banner.jpg"
                    alt="..."
                />
            </Carousel>
        </div>
    );
}

export default SliderComponent;