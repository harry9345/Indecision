
class VisibilityToggle extends React.Component{
 constructor(props){
 super(props)
 this.handelVisibilityToggle=this.handelVisibilityToggle.bind(this)
 this.state={
     visibility:false
 };
 }
 handelVisibilityToggle(){
     this.setState((prevState)=>{
         return{
             visibility: !prevState.visibility
         }
     })
 }
 render(){
     return (
         <div>
         <h1>Visibilitiy Toggle</h1>
         <button onClick={this.handelVisibilityToggle}>
         {this.state.visibility?"Hide Detail":"Show Details"}
         </button>
         {this.state.visibility && (
             <div>
             <p>THis is the details</p>
             </div>
         )}
         </div>
     )
 }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))