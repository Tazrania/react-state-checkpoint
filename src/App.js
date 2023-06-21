

class App extends React.Component {
  state = {
    person : {
      fullName : "Jane Doe",
      bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu erat est.",
      imgSrc : "meme.png",
      profession : "Developer"
    },
    show : false,
    lastMountedTime: null,
  };

  componentDidMount() {
    this.setState({
      lastMountedTime: new Date().toLocaleTimeString(),
    });
  }

  render(){
    const { person , show, lastMountedTime } = this.state;


    return (
      <div>
        <button onClick={this.toggleShow}>Click Me</button>
        {
          show && ( 
            <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
          <p>Last mounted time: {lastMountedTime}</p>
      </div>
    );
  }
}

export default App;
