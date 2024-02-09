const Contact = () => {
  return (
    <form action="submit" className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl archivFont">Contact</h1>
        <label htmlFor="name" className="flex justify-between">
          Name:
          <input type="text" id="name" className="w-3/5"/>
        </label>
        <label htmlFor="email" className="flex justify-between">
          Email:
          <input type="text" id="email" className="w-3/5"/>
        </label>
        <label htmlFor="message" className="flex justify-between">
          Message:
          <input type="text" id="message" className="w-3/5"/>
        </label>
      </form>
  )
}

export default Contact