import React, { Component } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify'; 
import { createNote, deleteNote, updateNote } from '../graphql/mutations';
import { listNotes } from '../graphql/queries';
import { onCreateNote, onDeleteNote, onUpdateNote } from '../graphql/subscriptions';


class Home extends Component {

//     state = { 
//         brand: [], 
//         id: "",
//         note: "",
//         notes: [
//             {
//                 id: 1,
//                 note: "Hello Notes"
//             }
//         ]
//     }
    
//     async componentDidMount() {
//         this.getNotes();
//         this.createNoteListener = API.graphql(graphqlOperation(onCreateNote, {
//             owner: (await Auth.currentUserInfo()).username
//         })).subscribe(
//             {
//                 next: noteData => {
//                     console.log("noteData: ", noteData);
//                     const newNote = noteData.value.data.onCreateNote
//                     const prevNotes = this.state.notes.filter(note => note.id !== newNote.id)
//                     const updatedNotes = [...prevNotes, newNote]
//                     this.setState({notes: updatedNotes});
//                 }
//             }
//         )
//         this.deleteNoteListener = API.graphql(graphqlOperation(onDeleteNote, {
//             owner: (await Auth.currentUserInfo()).username
//         })).subscribe(
//             {
//                 next: noteData => {
//                     const deletedNote = noteData.value.data.onDeleteNote
//                     const updatedNotes = this.state.notes.filter(note => note.id !== deletedNote.id)
//                     this.setState({notes: updatedNotes})
//                 }
//             }
//         );

//         this.updateNoteListener = API.graphql(graphqlOperation(onUpdateNote, {
//             owner: (await Auth.currentUserInfo()).username
//         })).subscribe(
//             {
//                 next: noteData => {
//                     const updatedNote = noteData.value.data.onUpdateNote
//                     console.log("updatedNote: ", updatedNote)
//                     const { notes } = this.state;
//                     const index = this.state.notes.findIndex(note => note.id === updatedNote.id)
//                     console.log("index note changed: ", index)
//                     console.log("updateNote.id: ", updatedNote.id)
//                     const updatedNotes = [
//                         ...notes.slice(0, index),
//                         updatedNote, 
//                         ...notes.slice(index + 1) 
//                     ];
//                     this.setState({notes: updatedNotes })
//                 }
//             }
//         )
//     }

//     // componentWillUnmount() {
//     //     this.createNoteListener.unsubscribe();
//     //     this.deleteNoteListener.unsubscribe();
//     //     this.updateNoteListener.unsubscribe();
//     // }


//     getNotes = async () => {
//         try {
//             const result = await API.graphql(graphqlOperation(listNotes))
//             this.setState(
//                 { notes: result.data.listNotes.items }
//             )
//         }
//         catch(error){
//             console.log('error from query: ', error);
//         }
//     }
    
//     hasExistingNote = () => {
//         const { notes, id } = this.state
//         if (id) {
//             const isNote = notes.findIndex(note => note.id === id) > -1
//             return isNote;
//         }
//         return false;
//     }

//     handleChangeNote = event => this.setState({note: event.target.value})
//     handleAddNote = async event => {
        
//         const { note } = this.state;
        
//         event.preventDefault()
        
//         if (this.hasExistingNote()) {
//             console.log('note updated')
//             this.handleUpdatedNote()
//         } else {
//             const input = {
//                 note: note
//             }
    
//             // check if there is an existing note, if so, update it
    
//             await API.graphql(graphqlOperation(createNote, { input: input}))
//             // const result = await API.graphql(graphqlOperation(createNote, { input: input}))
//             // console.log("result: ");
//             // console.log(result.data.createNote);
//             // const newNote = result.data.createNote;
    
//             // const updatedNotes = [newNote, ...notes]
//             this.setState({ note: ""})
//         }
//     }

//     handleUpdatedNote = async () => {
//         const {  id, note } = this.state;
//         const input = { id, note }

//         await API.graphql(graphqlOperation(updateNote, { input }))
//         // const updatedNote = result.data.updateNote;
//         // console.log("updatedNote: ", updatedNote)
//         // const index = notes.findIndex(note => note.id === updatedNote.id)
//         // console.log("index note changed: ", index)
//         // console.log("updateNote.id: ", updatedNote.id)
//         // const updatedNotes = [
//         //     ...notes.slice(0, index),
//         //     updatedNote, 
//         //     ...notes.slice(index + 1) 
//         // ];
//         // this.setState({notes: updatedNotes, note: "", id: "" })
//         this.setState({ note: "", id: "" })


//     }

//     handleDeleteNote = async noteId => {
//         console.log("noteId received", noteId)
//         // const {notes} = this.state
//         const input = {id: noteId}
//         await API.graphql(graphqlOperation(deleteNote, {input}))
//         // const deletedNoteId = result.data.deleteNote.id
//         // const updatedNotes = notes.filter(note => note.id !== deletedNoteId)
//         // this.setState({ notes: updatedNotes})
//     }

//     handleSetNote = ({ note, id}) => this.setState({note, id})

//     render () {
//         const { notes } = this.state
//         return (
//             <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
//                 <h1 className="code f2-1">Amplify NoteTaker</h1>
//                 <form className="mb3" onSubmit={this.handleAddNote} >
//                     <input
//                       type="text" 
//                       className="pa2 f4" 
//                       placeholder="Write your note" 
//                       onChange={this.handleChangeNote} 
//                       value={this.state.note}
                    
//                     />
//                     <button className="pa2 f4" type="submit">
//                         { this.state.id ? "Update Note": "Add Note"}
//                     </button>
//                 </form>

//                 <div>
//                     {notes.map(item => (
//                         <div key={item.id}
//                         className="flex items-center">
//                             <li 
//                               className="list pa1 f3"
//                               onClick={() => this.handleSetNote(item)}
//                               >
//                               {item.note}
                              
//                             </li>
//                             <button 
//                               className="bg-transparent bn f4"
//                               onClick={() => this.handleDeleteNote(item.id)}
//                             >
//                                 <span>&times;</span>
//                             </button>
//                             </div>
//                     ))}

//                 </div>
//             </div>
        
//             // <div>
//             //     <h2>Home Page</h2>
//             //     <ul>
//             //      {
//             //          this.state.brand.map((brand, index) => (
//             //             <p key={index}>{brand.name}</p>
//             //          ))
//             //      }
//             //     </ul>
    
//             // </div>
//         )
//     }
// }

  render() {
      return(
          <h3>Homepage without notes</h3>
      )
  }
}

export default Home;
