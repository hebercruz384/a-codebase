import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello My React App</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Slot />
    </div>
    
  );
}
function Slot() {
  return(
    <div style= {{
      backgroundColor : 'blue',
      width : '100px',
      lenght : '100px'
 }}
    /> 
    
  );
}