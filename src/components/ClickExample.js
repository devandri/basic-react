function ClickExample() {

  function handleClick() {
    try {
      (5).toUpperCase()
    } catch (e) {
      console.log("Something went wrong:", e)
    }
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  )

}

export default ClickExample;