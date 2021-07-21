import React from "react";
import CardInfo from "../CardInfo";

function Table({ headings, users, sort}) {
    return (
        <div className="table mt-5">
            <table
                id="table"
                className="table table-dark table-striped table-hover table-bordered table-condensed">
                    <thead class="hed">
                        <tr>
                            {headings.map(({ name, width }) => {
                                return (
                                    <th className="col"
                                        key={name}
                                        style={{ width }}
                                        onClick={() => {
                                            sort(name.toLowerCase());
                                        }}
                                        >
                                            {name}
                                            <span className="pointer"><i class="fas fa-sort"></i></span>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                <CardInfo users={users} />
            </table>
        </div>
    );
}

export default Table;
