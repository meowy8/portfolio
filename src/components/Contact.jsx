const Contact = () => {
  return (
    <form action="submit" className="flex flex-col gap-4 p-4 md:w-3/5 max-w-[500px]">
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
          <textarea type="text" id="message" className="w-3/5"/>
        </label>
      </form>
  )
}

export default Contact