import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post(props) {
  const { id } = useParams();
  console.log(id);
  return <div> ID: {id} </div>;
}
