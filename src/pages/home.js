import React from 'react'

import { Mood } from '../components/'
import ReactDOM from 'react-dom';
import moment from "moment";
// this was all programmed in VisualStudio for reference to editor

class Feeling extends React.Component {
  render() {
    return <h1>{this.props.feeling}</h1>
  }
}

export default  class Home extends React.Component {
    constructor(props) {
        super(props); // for some reason this constructor gets called twice and am unsure why

        this.SetSad = this.SetSad.bind(this)
        this.SetHappy = this.SetHappy.bind(this) // Here we are simply binding the buttons functions for calling later
        this.SetNeutral = this.SetNeutral.bind(this)

        this.state = {AwaitingMood: true, colour: 'white', text: ["How are you feeling today?","You are happy! Glad to hear it!", "That's a shame. We hope your day gets better", "You are Okay"]};

        this.moodText = this.state.text[0]
        console.log(this.moodText)
        console.log(this.props.moods)
    };
    SetHappy() {
        console.log("you're happy")
        try {
        console.log(this.props.moods[0])  // We are trying this instead of simply declairing it due to an error that keeps occouring on first attempt where it gets called twice
        } catch (e) {
        console.log('Error')
        }
        this.moodText = this.state.text[1]
        let newColor = 'green'
        this.setState({AwaitingMood: false, colour: newColor})
    }
    SetSad(){
        console.log("you're sad")
        try {
        console.log(this.props.moods[1])  // We are trying this instead of simply declairing it due to an error that keeps occouring on first attempt where it gets called twice
        } catch (e) {
        console.log('Error')
        }
        this.moodText = this.state.text[2]
        let newColor = 'red'
        this.setState({AwaitingMood: false, colour: newColor})

    }
    SetNeutral(){

        console.log("you're not feeling any extreme")
        try {
        console.log(this.props.moods[3])  // We are trying this instead of simply declairing it due to an error that keeps occouring on first attempt where it gets called twice
        } catch (e) {
        console.log('Error')
        }
        this.moodText = this.state.text[3]
        let newColor = 'yellow'
        this.setState({AwaitingMood: false, colour: newColor})

    }

   render(){
                const date = moment().format('MMMM DD, YYYY')
                const NewMood = this.moodText
                return <div className="body-container">
                                <div className="wrapper-content"  style={{backgroundColor: this.state.colour}}>
                                    <h2>{ date }</h2>
                                    <Feeling feeling={NewMood}/>
                                    <div className="row" >
                                        {
                                        this.state.AwaitingMood? <section className="grid" style={{gridTemplateColumns: `repeat(3, minmax(340px, 1fr))`}}> 
                                                                <div className="col">
                                                                    <button variant="contained" color="green" onClick={this.SetHappy}>Happy</button>
                                                                </div>
                                                                <div className="col">
                                                                     <button variant="danger" onClick={this.SetSad}>Sad</button>
                                                                </div>
                                                                <div className="col">
                                                                     <button variant="primary" onClick={this.SetNeutral}>Neutral</button>
                                                                </div>
                                                        </section> : null
                                        }
                                    </div>
                                </div>
                        </div>
            }
        }

const moods =  ["happy","sad","neutral","undefined"];

ReactDOM.render(<Home moods={moods}/>, document.getElementById('root'));