// Write your code here
import {NoteItemContainer, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <NoteItemContainer>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </NoteItemContainer>
  )
}

export default NoteItem
