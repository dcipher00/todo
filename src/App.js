import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value})
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter') {

    }
  }

  deleteNote(index) {
    let notesarr = this.state.notes;
    notesarr.splice(index, 1);
    this.setState({ notes: notesarr })
  }

  addNote() {
    if(this.state.noteText === '') {return}
    let notesarr = this.state.notes;
    notesarr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  render() {
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
        deleteMethod={ () => this.deleteNote(key) } />
    })
    return (
      <div className="Container">
      <div className="header">Todo App</div>
      {notes}
      <div className="btn" onClick={this.addNote.bind(this)}>+</div>
      <input type="text"
        ref={((input) => {this.textInput = input})}
        className="textInput"
        value={this.state.noteText}
        onChange={noteText => this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
