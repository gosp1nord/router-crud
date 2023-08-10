import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from 'react-router-dom';
import { getContent } from './requests';
import imgLink from './imgs';

const strSrc = imgLink();

export function ViewCard() {
  const [post, setState] = useState({})
  const [delRedirect, setDel] = useState('')
  const { id } = useParams();
  const pathEdit = `/posts/edit/${id}`
  
  useEffect(() => {
    const params = {
      headers: {
        method: "GET"
      },
      id: id,
      callback: createPost
    }
    getContent(params)
  }, [])

  const createPost = (data) => {
    setState(data.post)
  }

  if (delRedirect === 'success') {
    return <Navigate to="/" />
  }

  const DellHandler = () => {
    const params = {
      headers: {
        method: "DELETE"
      },
      id: id,
      callback: setDel
    }
    getContent(params)
  }

  return (
    <>
    <div key={post.id} id={post.id} className="block-card-read">
      <div className="line-close">
        <Link to={"/"} className="close">&#10006;</Link>
      </div>

      <img src={strSrc} className="img-view" />
      <div className="title-card">{post.title}</div>
      <div className="text-card" >{post.text}</div>

      <div className='block-btns'>
        <Link to={pathEdit} state={post} className="btn-read" >Изменить</Link>
        <div className="btn-read btn-del" onClick={DellHandler}>Удалить</div>
      </div>
    </div>
    </>
  )
}
