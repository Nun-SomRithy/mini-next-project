
import React from 'react';
import UserDetailsComponent from "@/components/UserDetailsComponent";
import {getUserDetail} from "@/app/datafetch/product";







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