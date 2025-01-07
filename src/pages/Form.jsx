import React, { useState } from 'react'

const Form = () => {
    const [data , setData] = useState(

    );
  return (
    <div class="container">
    <h1>File Upload</h1>
    <form
      action="http://localhost:4040/upload"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="file" name="file" required />
      <button type="submit">Upload File</button>
    </form>
  </div>
  
  )
}

export default Form
