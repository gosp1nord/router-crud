import { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { getContent } from './requests';
import imgLink from './imgs';

const strSrc = imgLink();

export function NewCard() {
  const [form, setForm] = useState({
    title: '',
    text: ''
  });
  const [saveRedirect, setSave] = useState('');

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
        method: "POST",
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({id: 0, title: form.title, text: form.text}),
      },
      callback: setSave
    }
    getContent(params)
  }

  return (
    <>
    <div key={form.id} id={form.id} className="block-card-read">
      <div className="line-close">
        <Link to="/" className="close">&#10006;</Link>
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
