import { getContent } from './requests';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import imgLink from './imgs';


export function HomePage() {
  const arrPosts = []
  const [posts, setState] = useState({items: arrPosts})

  useEffect(() => {
    const params = {
      headers: {
        method: "GET"
      },
      callback: createPostsArr
    }
    getContent(params)
  }, [])

  const createPostsArr = (data) => {
    data.forEach(item => {
      arrPosts.push(<PostCard item={item} />)
    })
    setState({...posts, items: arrPosts})
  }

  return (
    <>
    {posts.items}
    </>
  )
}

const PostCard = ({item}) => {
  const strSrc = imgLink();
  const path = `/posts/${item.id}`

  return (
    <>
    <div key={item.id} id={item.id} className="block-card">
      <img src={strSrc} className="img-view" />
      <div className='block-text'>
        <div className="title-card">{item.title}</div>
        <div className='block-btn-read'>
          <Link to={path} className="btn-read" >Просмотр</Link>
        </div>
      </div>
    </div>
    </>
  )
}
