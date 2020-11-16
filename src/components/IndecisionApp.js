import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handelDelet = () => {
    this.setState(() => ({ options: [] }));
  };
  handelDeletOption = (optionToremove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToremove !== option),
    }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handelPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  };
  handelAddOption = (option) => {
    if (!option) {
      return "enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exits";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("coponnentWillUnmount");
  }
  render() {
    const subtitle = "Put your life in the World";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handelPick={this.handelPick}
            hasOptions={this.state.options.length > 0}
          />
          <Options
            options={this.state.options}
            handelDelet={this.handelDelet}
            handelDeletOption={this.handelDeletOption}
          />
          <AddOption handelAddOption={this.handelAddOption} />
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
