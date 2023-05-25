"use client";
import React from 'react';
import {Button, Card, Dropdown} from "flowbite-react";
import {getUserDetail} from "@/app/userdetails/[id]/page";
import Image from "next/image";

export default function UserComponent({id, name, avatar, role}) {
    return (
        <div>
            <div className="max-w-sm w-60">
                <Card>
                    <div className="flex flex-col items-center ">
                        <Image unoptimized
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src={avatar ? avatar : "https://flowbite.com/docs/images/people/profile-picture-3.jpg"}
                            alt="Bonnie image"
                        />

                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {name ? name : "Name"}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
{role ? role : "Role"}
      </span>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <Button size="xs"  color="red" >
                                <a href={`/userdetails/${id}`}> Read More</a>

                            </Button>

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
