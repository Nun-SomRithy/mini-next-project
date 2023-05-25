"use client"
import React from 'react';
import UserDetailsComponent from "@/components/UserDetailsComponent";



export async function getUserDetail(id) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const datauser = await res.json();
    return datauser;
}
//  export async function generateMetadata({ params }) {
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
//     };
// }


async function getUser({params}) {
    const { id } = params;
    console.log(id);
    const userdetail = await getUserDetail(id);
    console.log(userdetail);
    return (
      <UserDetailsComponent
      id={userdetail.id}
      name={userdetail.name}
      email={userdetail.email}
      role={userdetail.role}
      create={userdetail.creationAt}
      avatar={userdetail.avatar}
      />

    );
}

export default getUser;