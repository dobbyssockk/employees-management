import styled from 'styled-components';

const StyledAppInfo = styled.div`
    padding: 25px;
    background-color: #293241;
    border-radius: 4px;
    box-shadow: 0 13px 30px rgba(0, 0, 0, 0.5);
    color: #E3E4E6;
`;

function AppInfo({employees, increasedEmployees}) {
    return (
        <StyledAppInfo className="app-info">
            <h1>Accounting for employees in company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Bonus received: {increasedEmployees}</h2>
        </StyledAppInfo>
    );
}

export default AppInfo;