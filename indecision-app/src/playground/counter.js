
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      //setup default state object
      count: 0
    };
  }
  componentDidMount(){
    try{
      const stringcount = localStorage.getItem('count');
      const count = parseInt(stringcount, 10);

      if(!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch(e) {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={10} />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounter();
// };
// const minusOne = () => {
//     count--;
//     renderCounter();
// };
// const reset = () => {
//     count = 0;
//     renderCounter();
// }

// var appRoot = document.getElementById('app');

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounter();
