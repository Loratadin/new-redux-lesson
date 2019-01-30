import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdd} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.reducer.persons,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonDelete: (id) => dispatch({ type: actionTypes.DELETE, personId: id }),
        onPersonAdd: () => dispatch({type: actionTypes.ADD}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);