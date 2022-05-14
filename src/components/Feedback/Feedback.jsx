import React, { Component } from "react";
import Container from "../Container"
import Statistics from "../Statistics";
import Controls from "../Controls";
import Section from "../Section";
import Notiffication from "../Notification";

class Feedback extends Component {
  static defaultProps = {
    total: 0,
    percentPositivFeedback: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
 };
    
  handelState = name => {
      this.setState(prevState => {
        return {
            [name]: prevState[name] + 1,
        }
    })
 }
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
    }

  countPositiveFeedbackPercentage() {
        this.percentPositivFeedback = Math.round((this.state.good / this.total) * 100);
    }

    render() {
        const buttons = Object.keys(this.state);
        
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()


    return (
      <Container>
        <Section title="Please leave feedback">
                <Controls
                    options={buttons}
                    onLeaveFeedback={this.handelState}
                />
        </Section>

        <Section title="Statistics">
          
          {this.total === 0 ? (
            <Notiffication message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total}
              positivePercentage={this.percentPositivFeedback}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
