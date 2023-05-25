"use client"
import React from 'react';
import UserComponent from "@/components/UserComponent";
import {getUserDetail} from "@/app/userdetails/[id]/page";

export async function getUserData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=9")
    const data = await res.json();
    return data;
}


// export async function generateMetadata({ params }) {
//     const { id } = params;
//     const user = await getUserDetail(id);
//     return {
//         title: user.title,
//         description: user.description,
//         metadataBase: new URL("https://istad.co"),
//         alternates: {
//             canonical: "/", // canonical mean the original page
//             languages: {
//                 "en-US": "/en-US",
//                 "de-DE": "/de-DE",
//             },
//             openGraph: {
//                 images: user.avatar,
//             },
//         },
//         openGraph: {
//             images: user.avatar,
//         },
//     };
// }



export default async function Page() {
const  users = await getUserData()
console.log(users)
    return (
        <div>
            <div className={"flex min-h-screen flex-wrap items-center justify-between container mx-auto p-24 gap-y-20 gap-8"}>
                {users.map((user) => (
                    <UserComponent
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        role={user.role}
                    />
                ))}
            </div>
        </div>
    );
}

