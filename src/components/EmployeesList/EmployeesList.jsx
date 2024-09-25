import styled from 'styled-components';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';

const StyledList = styled.ul`
    margin-top: 30px;
    background-color: #293241;
    border-radius: 4px;
    box-shadow: 0 13px 30px rgba(0, 0, 0, 0.5);
    color: #E3E4E6;
`;

function EmployeesList({data, onDelete, onToggleProp}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        );
    });

    return (
        <StyledList className="app-list list-group">
            {elements}
        </StyledList>
    );
}

export default EmployeesList;