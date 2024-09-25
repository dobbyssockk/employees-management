import styled from 'styled-components';

const StyledListItem = styled.li`
    padding: 15px 20px;
    border-bottom: 1px solid #293241;
    &:last-child {
        border-bottom: none;
    }
    span {
        line-height: 35px;
        font-size: 20px;
        cursor: pointer;
        min-width: 550px;
    }
    input {
        line-height: 35px;
        font-size: 20px;
        text-align: center;
        border: 0;
    }
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }
    .btn-cookie {
        color: #e09f3e;
    }
    .btn-trash {
        color: #e5383b;
    }
    .fa-star {
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: #FFD700;
        transition: 0.3s all;
        transform: translateX(30px);
        opacity: 0;
    }
    &.like .fa-star {
        opacity: 1;
        transform: translateX(0px);
    }
    &.increase .list-group-item-label, &.increase .list-group-item-input {
        color: #e09f3e;
    }

    &.increase .btn-star {
        color: #aeaeae;
    }
`;

function EmployeesListItem(props) {
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) classNames += ' increase';
    if (rise) classNames += ' like';

    return (
        <StyledListItem className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={'$' + salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </StyledListItem>
    );
}

export default EmployeesListItem;