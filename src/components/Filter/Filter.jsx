import styled from 'styled-components';

const StyledFilter = styled.div`
    margin-top: 20px;
`;

function Filter(props) {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'For promotion'},
        {name: 'moreThan1000', label: 'Salary over $1000'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });

    return (
        <StyledFilter className="btn-group">
            {buttons}
        </StyledFilter>
    );
}

export default Filter;