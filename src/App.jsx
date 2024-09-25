import {Component} from 'react';
import styled from 'styled-components';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Filter from './components/Filter/Filter';
import EmployeesList from './components/EmployeesList/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm/EmployeesAddForm';

const StyledApp = styled.div`
    margin: 0 auto;
    max-width: 1000px;
`;

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, rise: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, rise: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = this.state.data.length + 1;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newData = [...data, newItem];

            return {
                data: newData
            };
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, [prop]: !item[prop]};
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(({name}) => name.toLowerCase().includes(term.toLowerCase()));
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <StyledApp className="app">
                <AppInfo
                    employees={employees}
                    increasedEmployees={increasedEmployees}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <Filter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </StyledApp>
        );
    }
}

export default App;