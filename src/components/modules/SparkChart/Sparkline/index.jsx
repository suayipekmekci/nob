import React, { PropTypes, Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import  withStyle  from 'react-with-style'
import s from './style.css';

function boxMullerRandom () {
    let phase = false,
        x1, x2, w, z;

    return (function() {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);

let datainterval = "";
class Sparkline extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
      if(this.props.random){
       datainterval = setInterval(() =>
       this.setState({
           data: this.state.data.concat([boxMullerRandom()])
       }), 200);
     }else{
       this.setState({
         data:[5, 10, 5, 20, 8, 15, 20, 8, 15, 3, 10, 5, 20, 8, 15, 20, 8, 15, 3, 20, 8, 15, 20, 8 ]
       })
     }
    }
    componentWillUnmount() {
       clearInterval(datainterval);
    }
    render() {
      return (
        <div className="sparkLine">
          <Sparklines data={this.state.data} limit={20}>
              <SparklinesLine color="#1c8cdc"/>
              <SparklinesSpots />
          </Sparklines>
        </div>
      );
    }
}

export default withStyle(s)(Sparkline);
