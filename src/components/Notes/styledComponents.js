// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;

`

export const Heading = styled.h1`
    color: #4063b6;
    font-family: "Bree Serif";
    font-size: 35px;
    font-weight: bold;
    
`
export const FormContainer = styled.form`
    width: 80%;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 10px 10px 10px 10px #475569;
    display: flex;
    flex-direction: column;


`
export const InputElement = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    margin: 10px;


`
export const TextElement = styled.textarea`
    background-color: transparent;
    border: none;
    outline: none;
    margin: 10px;


`

export const AddButton = styled.button`
    background-color: #4c63b6;
    color: #ffffff;
    font-family: "Roboto";
    font-size: 15px;
    padding: 10px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 7px;
    align-self: flex-end;
    
`
export const EmptyNotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    jusify-content: center;
    align-items: center;
    margin-top: 50px;
`
export const Image = styled.img`
    width: 100px;
    
`
export const NotesListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
