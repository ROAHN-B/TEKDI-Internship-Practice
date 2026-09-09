function Student(props){
    return (
        <div>
        <h1>Hello {props.name}</h1>;
        <h2>Roll number: {props.roll}</h2>;
    </div>);
}

export default Student;