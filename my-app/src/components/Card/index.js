import React, { Component } from "react";
import Table from "../Table/table";
import Nav from "../NavBar";
import API from "../../utils/API";

export default class Card extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        { name: "Image", width: "8%" },
        { name: "Name", width: "15%" },
        { name: "Phone", width: "25%" },
        { name: "Email", width: "25%" },
        { name: "DOB", width: "15%" }
    ]

    sort = heading => {
        if(this.state.order === "descend") {
            this.setState({
            order: "ascend"
        })
        } else {
            this.setState({
            order: "descend"})
        }

        const compare = (a, b) => {
            if (this.state.order === "ascend") {
                
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                
                else if (heading === "name") {
                    return a[heading].first.localCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }    
            
                else if (heading === "name") {
                    return b[heading].first.localCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const sortedUsers = this.state.filteredUsers.sort(compare);
        this.setState({filteredUsers: sortedUsers });
    }

    searchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            
            let values = Object.values(item)
            .join("")
            .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({filteredUsers: filteredList});
    }

    componentDidMount(){
        API.getUsersProfile().then(results => {
            console.log(results)
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <>
                <Nav searchChange={this.searchChange} />
                <div className="data-area">
                    <Table
                    headings={this.headings}
                    users={this.state.filteredUsers}
                    sort={this.sort}
                    />
                </div>
            </>
        );
    }
}
