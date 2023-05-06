import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post(props) {
  const { postID } = useParams();
  return <div> ID: {postID} </div>;
}
