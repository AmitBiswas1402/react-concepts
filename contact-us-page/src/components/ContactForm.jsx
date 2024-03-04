import Button from "./Button"
import Button2 from "./Button2"
import Button3 from "./Button3";
import { useState } from "react"

function ContactForm() {
  const onSubmit = (event) =>{
    console.log(event);
  }

  return (
    <>
    <div className="p-3 flex gap-3">
        <Button />
        <Button2 />
    </div>
    <div className="flex">
        <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <Button3 />
          {/* <div>{name + " " + email + " " + text}</div> */}
        </form>
    </div>
    </>
  )
}

export default ContactForm