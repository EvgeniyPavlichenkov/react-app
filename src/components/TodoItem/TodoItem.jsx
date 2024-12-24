import React from 'react';
import styled, { css } from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import {TodoItemCheckbox} from './TodoItemCheckbox';
import { useDeleteTodoItem  } from '../../data/hooks/useData';
import {useState} from 'react';
import { PriorityInput } from './PriorityInput';

const checkedCss = css`
  color: #B5B5BA;
  text-decoration: line-through;
`

const Title = styled.span(props => {
  return `
    font-size: 15px;
    overflow-wrap: break-word;
    ${props.checked ? checkedCss : ''};
  `;
})

const Delete = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  cursor: pointer;
`;


export const TodoItem = ({title, checked, id, priority}) => {
  const [color, setColor] = useState(priority === '1' ? '#90EE90' : priority === '2' ? '#FFFACD' : '#FFCCCB');
  const { mutate } = useDeleteTodoItem();
  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
      mutate({ id });
    }
  }


  return (
    <TodoItemContainer style={{ backgroundColor: color, display: 'flex', justifyContent: 'space-between'}}>
      <TodoItemCheckbox checked={checked} disabled={false} id={id} priority={priority} />
      <Title checked={checked}>
        {title}
      </Title>
      <Delete onClick={handleDelete} />
      <PriorityInput checked={checked} id={id} priority={priority} setColor={setColor} />
    </TodoItemContainer>
  )
}
