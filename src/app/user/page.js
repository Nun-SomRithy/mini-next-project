
import React from 'react';
import UserComponent from "@/components/UserComponent";
import {getUserDetail} from "@/app/userdetails/[id]/page";

export async function getUserData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=9")
    const data = await res.json();
    return data;
}

export const metadata = {
    title: 'User',
    description: "Our website is designed to provide you with comprehensive information about our exceptional product and its features.",
    locale: 'en-US',
    manifest: '/manifest.json',
    type: 'website',
    siteName: 'DinoShop',
    category: 'product',
    openGraph:{
        title: 'User - DinoShop',
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

