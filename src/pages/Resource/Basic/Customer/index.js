import React, { Component } from 'react'
import Filter from './Filter'
import Function from './Function'
import MTable from './Table'
export default class Customer extends Component {
    state={
        filterValue:{
            type:'',
            name:''
        }
    }
    changeFilter=(filterValue)=>{
        this.setState({
            filterValue
        })
    }    
    render() {
        const {filterValue}=this.state
        return (
            <div>
                <Filter
                    changeFilter={this.changeFilter}
                />
                <Function
                />
                <MTable
                    filterValue={filterValue}
                />
            </div>
        )
    }
}
