import React from "react";

function CardInfo({ users }) {
    function renderDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const rendertedDate = [month, day, year].join("-");
    return rendertedDate;
    }

    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img 
                                    src={picture.medium}
                                    alt={"profile image for " + name.first +  " " + name.last}
                                    className="img-responsive rounded"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto:" + email} target="_blank">
                                    {email}
                                </a>
                            </td>
                            <td data-th="DOB" className="align-middle">
                                {renderDate(dob.date)}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <></>
            )}
        </tbody>
    );
}

export default CardInfo;