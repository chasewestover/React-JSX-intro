function Person(props){
  const {name, age, hobbies} = props;
  return <div>
    <p>Hello, my name is {name.length > 8? name.slice(0,6): name} and I am {age} years old</p>
    <h3>{age >= 18 ? "Please go vote" : "You must be 18 to vote"}</h3>
    <ul>
      {hobbies.map(hobby => <li>{hobby}</li>)}
    </ul>
  </div>
}