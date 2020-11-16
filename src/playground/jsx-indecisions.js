console.log("this is it");


// jsx - javascript xml
let app={
    title:"indecision app",
    sub:"This is some change",
    options : []
};

const onFormSubmit=(e)=>{
    e.preventDefault();
     
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
          render();
    }
};

const onMake= ()=>{
    const randomNum= Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
};

const render =()=>{
   
    const template = (
        <div> 
          <h1>Title :{app.title}</h1>
          {app.sub && <p>{app.sub} </p>}
          <p>{app.options.length > 0 ? "Here are your options : ": "No options"}</p> 
          <button disabled={app.options.length === 0} onClick={onMake}>What should i do ?</button>
          <button onClick={()=>{app.options=[],render()}}> Remove All</button>
         
          <ol>
          {
            app.options.map((option)=> <li key={option}> {option}</li>)
          }
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button >Add Option</button>
          </form>
        </div>
      );
      ReactDOM.render(template,appRoot);
};


const appRoot = document.getElementById('app')
render();
