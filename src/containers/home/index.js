
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, getItemsUserID, getEmployeeIDList, clearDropdownSelection } from '../../actions/items';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.url = 'https://reqres.in/api/users/';
    }

    render() {

        const {userID, employeeID, items, isLoading, hasErrored, hasCleared} = this.props;
       
        return (
            <div className="app-container">
                <div className="user-info-wrapper" id="user-info-wrapper">
                    <Dropdown
                        label="Departments:"
                        defaultSelectedKey="Select an Option"
                        selectedKey={!hasCleared ? (employeeID.dept && employeeID.dept.key) : ""}
                        onChanged={this.props.handleDeptChange}
                        placeHolder="Select an Option"
                        options={[
                            { key: 'hr', text: 'HR' },
                            { key: 'engineering', text: 'ENGINEERING' },
                        ]}
                    />

                    <Dropdown
                        label="Employee Id:"
                        selectedKey={!hasCleared ? (userID && userID.toString()) : ""}
                        onChanged={this.props.handleEmpIdChange}
                        placeHolder="Select an Option"
                        options={employeeID && employeeID.employeeIdList}
                    />  
                
                    <PrimaryButton
                        text="GetDetails"
                        onClick={() => this.props.fetchData(this.url+userID)}
                    />

                    <PrimaryButton
                        text="Clear"
                        onClick={this.props.clearSelection}
                    />
                </div>

                <div className="user-details">

                    {isLoading && !hasErrored &&
                        <p>Loading…</p>
                    }
                    {hasErrored && 
                        <p>Sorry! There was an error loading the items</p>
                    }

                    {!isLoading && items && items.id && !hasCleared &&
                        <div key={items.id}>
                            <img alt="userimage" src={items.avatar} width="400px" height="400px"/>
                            <div className="user-info">
                                <div>{items.id}</div>
                                <div>{items.first_name} {items.last_name}</div>
                            </div>
                        </div>    
                    } 

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        userID: state.itemsUserID,
        employeeID: state.getEmployeeIDArray,
        hasCleared: state.clearData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        handleDeptChange: (e) => dispatch(getEmployeeIDList(e)),
        handleEmpIdChange: (e) => dispatch(getItemsUserID(e)),
        clearSelection: (e) => dispatch(clearDropdownSelection(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
