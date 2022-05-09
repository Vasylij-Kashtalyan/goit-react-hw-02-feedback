import React, { Component } from "react";
import Container from "./components/Container";
import Statistics from "./components/Statistics";
import Controls from "./components/Controls";
import Section from "./components/Section";
import Notiffication from "./components/Notification";

class App extends Component {
  static defaultProps = {
    countTotalFeedback: 0,
    countPositiveFeedbackPercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelStatisticsGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handelStatisticsNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handelStatisticsBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );

    return (
      <Container>
        <Section title="Please leave feedback">
          <Controls
            onGood={this.handelStatisticsGood}
            onNeutral={this.handelStatisticsNeutral}
            onBad={this.handelStatisticsBad}
          />
        </Section>

        <Section title="Statistics">
          {" "}
          {countTotalFeedback === 0 ? (
            <Notiffication message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
