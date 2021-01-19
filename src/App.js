import "./App.css";
import React, { Component } from "react";
import buttons from "./components/buttons/buttons";
import Statistics from "./components/Statistics/Statistics";
import Feedback from "./components/Feedback/Feedback";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  handleTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const feedbackPercentage = (good / (good + neutral + bad)) * 100;
    return Math.round(feedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <Feedback
            buttons={buttons}
            onHandleIncrement={this.handleIncrement}
          ></Feedback>
        </Section>
        {this.state.good || this.state.neutral || this.state.bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.handleTotal()}
              positiveFeedback={this.positiveFeedback()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={"No feedback was given"}></Notification>
        )}
      </div>
    );
  }
}

export default App;
