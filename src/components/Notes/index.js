// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Container,
  Heading,
  FormContainer,
  InputElement,
  TextElement,
  AddButton,
  EmptyNotesContainer,
  Image,
  NotesListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])

    setTitle('')
    setNote('')
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onAddNote}>
        <InputElement
          type="text"
          value={title}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <TextElement
          type="textarea"
          placeholder="Take a Note..."
          rows="6"
          value={note}
          onChange={onChangeNote}
        />
        <AddButton type="submit">Add</AddButton>
      </FormContainer>

      {notesList.length === 0 ? (
        <EmptyNotesContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here </p>
        </EmptyNotesContainer>
      ) : (
        <NotesListContainer>
          {notesList.map(eachList => (
            <NoteItem noteDetails={eachList} key={eachList.id} />
          ))}
        </NotesListContainer>
      )}
    </Container>
  )
}

export default Notes
