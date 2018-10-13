//imports dependencies and files
import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import JobCard from "./components/JobCard";
import job from "./jobs.json";
import "./styles/App.css";
import "./styles/bootstrap.min.css"

//sets state to 0 or empty
class App extends Component {
  state = {
    job,
    jobsClicked: [],
    status: "Welcome, Warrior of Light. Click on any icon to begin!",
    score: 0,
    topScore: 0,

  };

  //when you click on a card ... the job is taken out of the array
  imageClick = event => {
    this.setState({
      status: "Good luck."
    });

    const currentJob = event.target.alt;
    const repeatedClick =
      this.state.jobsClicked.indexOf(currentJob) > -1;

    //if you click on a job that has already been selected, the game is reset and cards reordered
    if (repeatedClick) {
      this.setState({
        job: this.state.job.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        topScore = score,
        status: "You lose! Click to play again.",
        jobsClicked: [],
        score: 0
      });

      //if you click on an available job, your score is increased and cards reordered
    } else {
      this.setState(
        {
          job: this.state.job.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          jobsClicked: this.state.jobsClicked.concat(
            currentJob
          ),
          score: this.state.score + 1
        },
          () => {
          if (this.state.score === 15) {
            this.setState({
              status: "Congratulations! You've got great memory, Warrior of Light. Click to play again.",
              job: this.state.job.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              jobsClicked: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          status={this.state.status}
          topScore={this.state.topScore}
        />

        <Jumbotron />

        <div className="container">
          <div className="wrapper">
            {this.state.job.map(job => (
              <JobCard
                imageClick={this.imageClick}
                id={job.id}
                key={job.id}
                image={job.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;