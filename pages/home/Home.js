import React from 'react'
import BlogLists from '../../components/blogLists/BlogLists'
import Header from '../../components/header/Header'
import OverLay from '../../components/overlay/OverLay'

const Home = () => {
  return (
    <div>
        <Header/>
        <OverLay/>
        <BlogLists/>
    </div>
  )
}

export default Home