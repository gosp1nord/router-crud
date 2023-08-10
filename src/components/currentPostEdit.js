import { useState } from "react";
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { getContent } from './requests';
import imgLink from './imgs';

const strSrc = `../${imgLink()}`;

export function EditCard() {
  let { state } = useLocation();
  const [form, setForm] = useState(state);
  const [saveRedirect, setSave] = useState('')
  const { id } = useParams();
  const path = `/posts/${id}`

  if (saveRedirect === 'success') {
    return <Navigate to="/" />
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      headers: {
        method: "PUT",
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({title: form.title, text: form.text}),
      },
      id: id,
      callback: setSave
    }
    getContent(params)
  }

  return (
    <>
    <div key={form.id} id={form.id} className="block-card-read">
      <div className="line-close">
        <Link to={path} className="close">&#10006;</Link>
      </div>
      <img src={strSrc} className="img-view" />

      <form className="block-edit" autoComplete="off" onSubmit={handleSubmit}>
        <input id="title" className="style-title" name="title" type="text" value={form.title} onChange={handleChange} />
        <textarea className="area-text" name="text" value={form.text} onChange={handleChange} />
        <div className='block-btns'>
          <button type="submit" className="btn-read">Сохранить</button>
        </div>
      </form>

    </div>
    </>
  )
}
