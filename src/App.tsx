import React, {Component} from 'react';
import moment from "moment";
import Countdown from "./Countdown";
import Letters from "./Letters";

interface Props {

}

interface State {
  currentDate: moment.Moment,
  toDate: moment.Moment
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentDate: moment(),
      toDate: moment("2020-06-15 23:59")
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentDate: moment()});
    }, 1000)
  }


  render() {
    return (
        <div className="App">
          <Countdown now={this.state.currentDate} end={this.state.toDate}/>
          <Letters now={this.state.currentDate} end={this.state.toDate}/>
        </div>
    );
  }
}

export default App;
