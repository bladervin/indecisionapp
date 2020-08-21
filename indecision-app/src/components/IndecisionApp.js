import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

//Nested components
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  //handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  //pass down to Action and setup onClick - bind here
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    //use setState to set selectedOption, no prevState cos overriding a value
    this.setState(() => ({
        selectedOption: option
      }));
    };
  //adding new option
  handleAddOption = (option) => {
    if (!option) {
      //if option is empty
      return "Enter valid value to add option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }
    //invoked soon after a component is mounted
    componentDidMount() {
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        //if options are empty it shows nothing in JSON local storage
        if(options) {
          this.setState(() => ({ options }));
        }
      } catch(e) {
        //do nothing at all
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount() {
      console.log('component unmounted');
    }
    
    render() {
      const subtitle = "Can't decide what to choose in your life, well lucky for you because your computer can now make decisions for you";
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption = {this.handleClearSelectedOption}
            />
          </div>
          </div>
        </div>  
      );
    }
  }