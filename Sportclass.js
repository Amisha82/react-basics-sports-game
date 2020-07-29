//class Sports extends React.Component {
//  constructor(props) {
//    super(props);

//  this.increment = this.increment.bind(this)
//this.decrement = this.decrement.bind(this)
//this.reset = this.reset.bind(this)

//this.state = {
//  count: 0
//};
//}

//handleShoot() {
//  this.state = {
//    count: 1
//}
//}

//increment() {
//  this.setState({
//    count: this.state.count + 1
//});
//}

//reset() {
//  this.setState({
//    count: 0
//});
//}

//render() {
//  return
//<div>
//  <button className="shoot1" onclick={(e) => this.increment(e)}>SHOOT1</button>
//<h1>current Count:{this.state.count}</h1>
//</div>

//}
//}
//const shoot = (
//  <div>
//    <button />
//<div>
//)

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
            </div>
        );
    }
}

class Counter extends Component {

    render() {
        return <button>0</button>;
    }
}

export default App;