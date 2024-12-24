import styled from "styled-components"
import { useUpdateTodoItem } from "../../data/hooks/useData";
const Input = styled.select`
    font-size: 15px;
    width: 40px;
    border: solid 1px gray;
    border-radius: 15%;
    height: 20px;
    background-color: #F6F6F6;
`

export const PriorityInput = ({ id, checked, priority, setPriorityForNewTask, setColor }) => {
    const { mutate } = useUpdateTodoItem();
    const handleWeekChange = (e) => {
        const newPriority = e.target.value;
        if (setPriorityForNewTask) {
            setPriorityForNewTask(newPriority);
        }
        if (setColor) {
            setColor(newPriority === '1' ? '#90EE90' : newPriority === '2' ? '#FFFACD' : '#FFCCCB');
        }
        mutate({ id, checked, priority: e.target.value });
    };
    return (
        <Input value={priority} onChange={handleWeekChange} >
            {[1, 2, 3].map(num =>
                <option key={num} value={num}>
                    {num}
                </option>)}
        </Input>
    );
}