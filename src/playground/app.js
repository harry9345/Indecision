

class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handelDelet=this.handelDelet.bind(this);
    this.handelPick=this.handelPick.bind(this);
    this.handelAddOption=this.handelAddOption.bind(this);
    this.handelDeletOption=this.handelDeletOption.bind(this)
    this.state={
      options:[]
    };
  }
  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const options= JSON.parse(json);
    
      if(options) { 
       this.setState(() => ({ options }))
    }

    }catch(e){

    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options',json);
    }
  }
  componentWillUnmount() {
    console.log('coponnentWillUnmount');
  }
  handelDelet(){
    this.setState(() => ({ options: [] }));
  }
  handelDeletOption(optionToremove){
    this.setState((prevState) => ({
     options: prevState.options.filter((option) => optionToremove !== option )
    }));
  }
    

  handelPick(){
      const randomNum= Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum]
      alert(option);
  
  }
  handelAddOption(option){
    if(!option){
        return 'enter valid value';
    }else if(this.state.options.indexOf(option)>-1){
      return 'this option already exits';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render(){
    const subtitle = "Put your life in the World";
    
    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action 
       handelPick={this.handelPick}
       hasOptions={this.state.options.length > 0 }
        />
      <Options 
       options={this.state.options}
       handelDelet={this.handelDelet}
       handelDeletOption={this.handelDeletOption}
       />
      <AddOption
      handelAddOption={this.handelAddOption}
      />
      </div>
    )
  }
}
  




const Header= (props)=>{
  return (
    <div>
     <h1>{props.title}</h1>
     { props.subtitle && <h2>{props.subtitle}</h2> }
     </div>
  );
}
Header.defaultProps={
  title:'Indecition'
}
// class Header extends React.Component {
//  render(){
//    return (
//      <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//      </div>
//    );
//  }
// }
 const Action = (props) => {
  return (
    <div>
     <button
      onClick={props.handelPick}
      disabled={!props.hasOptions}
      >
      What should I do?</button>
    </div>
  );
 }
// class Action extends React.Component{
 
//   render(){
//     return (
//       <div>
//        <button
//         onClick={this.props.handelPick}
//         disabled={!this.props.hasOptions}
//         >
//         What should I do?</button>
//       </div>
//     );
//   }
// }
const Options = (props)=>{
  return (
    <div>
    <button onClick={props.handelDelet}>Remove All</button>
    {props.options.length == 0 && <p>please add an opttion</p>}
    {
      props.options.map((option)=> (
        <Option
          key={option} 
          optionText={option}
          handelDeletOption={props.handelDeletOption}
        />
      ))
    }

    </div>
  );
}

// class Options extends React.Component{
 
//   render() {
//     return (
//       <div>
//       <button onClick={this.props.handelDelet}>Remove All</button>
//       {
//         this.props.options.map((option)=> <Option key={option} optionText={option}/>)
//       }

//       </div>
//     );
//   }

// }
const Option = (props) =>{
  return (
    <div>
      {props.optionText}
        <button onClick={(e) => { 
            props.handelDeletOption(props.optionText)
        }} 
        >
        Remove Me
      </button> 
    </div>
  );
}

// class Option extends React.Component{
//    render(){
//      return (
//        <div>
//        {this.props.optionText}
//        </div>
//      );
//    }
// }




class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handelAddOption=this.handelAddOption.bind(this)
    this.state={
      error: undefined
    };

  }
  handelAddOption(e) {
    e.preventDefault();
  
    const option = e.target.elements.option.value.trim();
    const error= this.props.handelAddOption(option);
    this.setState(() => ({ error}));

    if(!error) {
      e.target.elements.option.value= '';
    }
  }

  render(){
     return (
       <div>
       {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handelAddOption}>
          <input type="text" name="option"/>
          <button >Submit</button>
        </form>
       </div>
     );
  }


}

// const User = (props)=> {
//   return (
//     <div>
//     <p>your name:{props.name}</p>
//     <p>age:{props.age}</p>
//     </div>
//   );
// };
ReactDOM.render(<IndecisionApp />,document.getElementById('app'))