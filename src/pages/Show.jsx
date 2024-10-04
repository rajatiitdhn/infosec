import React from 'react'
import { useParams } from 'react-router-dom'
import Solution from '../ctfsolutions/Solution';
import Nav from '../components/Nav';

const Show = () => {
    const {chall} = useParams();
  return (
    <>
    <Nav />
    <Solution chall={chall} />
    </>
  )
}

export default Show