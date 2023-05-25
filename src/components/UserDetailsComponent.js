'use client'
import React from 'react';
import {Avatar} from "flowbite-react";

function UserDetailsComponent({id,email,name,role,avatar,create}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Avatar
                    img={avatar? avatar:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                    rounded={true}
                    bordered={true}
                    size="lg"
                />
                <a href="#">
                    <h5 className=" m-6 text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        { name? name:"Unknown"}</h5>
                </a>
                <p className=" text-center mb-3 font-normal text-gray-500 dark:text-gray-400">Role : {role? role:"Unknown"}</p>
                <p className=" text-center mb-3 font-normal text-gray-500 dark:text-gray-400">Email : {email? email:"Unknown"}</p>
                <p className=" text-center mb-3 font-normal text-gray-500 dark:text-gray-400">CreatAt : {create? create:"Unknown"}</p><hr/>

            </div>


        </div>
    );
}

export default UserDetailsComponent;