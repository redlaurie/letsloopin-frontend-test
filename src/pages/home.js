//imports
import React from 'react'
import { Mood } from '../components/'
import ReactDOM from 'react-dom';
import moment from "moment";

// this was all programmed in VisualStudio for reference to editor
// for all the Scss please follow /src/assets/scss/base.scss

class Feeling extends React.Component {
  render() {
    return <h1>{this.props.feeling}</h1>
  }
}

class Date extends React.Component {
    render() {
        return <h2 style={{}}>{this.props.date}</h2>
    }
}

export default  class Home extends React.Component {
    constructor(props) {
        super(props); // for some reason this constructor gets called twice and am unsure why

        this.SetSad = this.SetSad.bind(this)
        this.SetHappy = this.SetHappy.bind(this) // Here we are simply binding the buttons functions for calling later
        this.SetNeutral = this.SetNeutral.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.mySubmitHandler = this.mySubmitHandler.bind(this)

        //state variables
        this.state = {AwaitingMood: true, BackgroundColour: 'white', TextColour: 'grey',
        text: ["How are you feeling today?","You are happy! Glad to hear it!", "That's a shame. We hope your day gets better", "You are Okay"]
        
        };

        this.moodText = this.state.text[0]
        this.reasonForMood = ''

        console.log(this.moodText) // console logs for debugging
        console.log(this.props.moods)
        console.log(this.props.date)
    };

    // Button Functions

    SetHappy() {
        console.log("you're happy")

        try {
        console.log(this.props.moods[0])  // We are trying this instead of simply declairing it due to an error that keeps occouring on first attempt where it gets called twice
        } catch (e) {
        console.log('Error')
        }

        this.moodText = this.state.text[1]
        let newColor = 'green'
        this.setState({AwaitingMood: false, BackgroundColour: newColor, TextColour: 'yellow'})
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
        this.setState({AwaitingMood: false, BackgroundColour: newColor, TextColour: 'white'})

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
        this.setState({AwaitingMood: false, BackgroundColour: newColor})
    }

    mySubmitHandler() {
        alert("You are submitting " + this.reasonForMood);
    }

    handleInputChange(text){
        console.log(this.reasonForMood)
        this.reasonForMood = text.target.value
    }

    //Frontend 
    render(){
                try {
                console.log(this.props.date)
                const date = this.props.date  // We are trying this instead of simply declairing it due to an error that keeps occouring on first attempt where it gets called twice
                } catch (e) {
                const date = moment().format('MMMM DD, YYYY')
                console.log('Error')
                }
                
                let InputBox = '';
                if (this.moodText === this.state.text[2]) {
                      InputBox = <h1>will you tell us why?<input type="text" onChange={this.handleInputChange}/>
                                                        <input type="button" value="Submit?" onClick={this.mySubmitHandler}/></h1>;
                } else {
                      InputBox = '';
                }

                const NewMood = this.moodText
                return <div className="body-container">
                                <div className="wrapper-content" style={{border: '1px solid black',borderRadius: '30px',
                                    backgroundColor: this.state.BackgroundColour, color: this.state.TextColour}}>
                                    <h2>{ date }</h2>
                                    <Feeling feeling={NewMood}/>
                                    <div className="row" style={{display: 'flex'}} >
                                        { //Sets buttons to hidden when mood is selected
                                        this.state.AwaitingMood? <section className="grid" style={{gridTemplateColumns: `repeat(3, minmax(100%, 500fr))`}}> 

                                                                <div className="col">
                                                                    <button class="button" style={{backgroundColor: '#4CAF50'}} 
                                                                                            onClick={this.SetHappy}>Happy</button>
                                                                </div>

                                                                <div className="col">
                                                                     <button class="button" style={{backgroundColor: '#f44336'}} 
                                                                                                onClick={this.SetSad}>Sad</button>
                                                                </div>

                                                                <div className="col">
                                                                     <button class="button" style={{backgroundColor: '#FFD700'}} 
                                                                                        onClick={this.SetNeutral}>Neutral</button>
                                                                </div>

                                                        </section> : null
                                        }
                                    </div>
                                    <div className="Input-div">
                                        {InputBox}
                                    </div>
                                </div>
                        </div>//Down here I was thinking a text box could appear when the user says they are sad asking why People don't tend to want to fill out the reason they are happy but understanding why they are sad means you can try to cheer that person up
            }
        }

const mood =  ["happy","sad","neutral","undefined"];
const date = moment().format('MMMM DD, YYYY')
ReactDOM.render(<Home moods={mood} date={date}/>, document.getElementById('root'));