import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [form , setForm] = useState({
    name: '',
  })

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newGoal = {
      name: form.name,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:8889/api/goals`, {
      method: "POST",
      body: JSON.stringify(newGoal),
      headers: {
        'Content-Type': 'application/json'
      },
  }).catch(err => {
    window.alert(`An error has occurred: ${err.message}`)
    return;
  });
    setForm({
      name: '',
    })
    navigate('/')

  }


  const navigate = useNavigate()
  return (
    <div>
    <h3>New Goal</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value="Update Record"
          className="btn btn-primary"
        />
      </div>
    </form>
  </div>
  )
}

export default Create
