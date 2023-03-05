import { useParams } from "react-router-dom";
import React from "react";

export default function UserPage() {
  let {id} = useParams();
  return (
    <>
    <h1>Hello there user {id}</h1>
    <p>This is your awesome User Profile page</p>
    </>
  );
}