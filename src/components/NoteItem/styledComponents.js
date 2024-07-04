// Style your elements here
import styled from 'styled-components'

export const NoteItemContainer = styled.li`
    list-type: none;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px #aab8c8;
    width: 200px;
    margin-right: 20px;
    margin-bottom: 30px;

    
`
export const Title = styled.h1`
    color: #1e293b;
    font-family: "Roboto"
    font-size: 15px;
    font-weight: bold;
`
export const Note = styled.p`
    color: #334155;
    font-family: "Roboto"
    font-size: 10px;
    font-weight: bold;
    

`
