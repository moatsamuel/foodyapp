

const Style = () => {

    const h1Style = {
        background: "red",
        color: "black",
        border: "1px solid gray"
      }


  return (
    <div>
        <h1 className='title' style = {h1Style}    >hello world</h1>
        <p style={{color: "blue", backgroundColor: "gray" }}> Greetings from mars </p>
        <p className="title" style={h1Style}>Greetings from Jupiter</p>
    </div>
  )
}

export default Style