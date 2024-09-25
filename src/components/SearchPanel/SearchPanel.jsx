import {Component} from 'react';
import styled from 'styled-components';

const StyledSearchPanel = styled.input`
    margin-top: 30px;
    padding: 25px;
    border-radius: 4px;
    box-shadow: 0 13px 30px rgba(0, 0, 0, 0.5);
`;

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <StyledSearchPanel
                type="text"
                className="form-control search-input"
                placeholder="Search for employee"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;