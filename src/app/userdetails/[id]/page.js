import React from 'react';
import UserDetailsComponent from "@/components/UserDetailsComponent";



export async function getUserDetail(id) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const datauser = await res.json();
    return datauser;
}

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