import { useState, useEffect } from "react";

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    // console.log(data);

    return data.length == 0 ? (
        <div className="div-center">"Loading..."</div>
    ) : (
        <>
            <div className="users-page">
                <div className="users-title">
                    <div>
                        <h1>User Details</h1>
                        <p>Manage and view all registered users.</p>
                    </div>

                    <p>
                        Total users: <span className="font-bold">{data.length}</span>
                    </p>
                </div>

                <div className="users-container">
                    {data &&
                        data.map((user) => (
                            <div key={user.id} className="user-card">
                                {/* User */}
                                <div className="user-header">
                                    <div>
                                        <h2>{user.name}</h2>
                                        <p>User name: @{user.username}</p>
                                    </div>

                                    <span>#{user.id}</span>
                                </div>

                                {/* Contact */}
                                <div className="user-info">
                                    <h3>Contact</h3>

                                    <p>
                                        <strong>Email:</strong> {user.email}
                                    </p>

                                    <p>
                                        <strong>Phone:</strong> {user.phone}
                                    </p>

                                    <p>
                                        <strong>Website:</strong> {user.website}
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="user-info">
                                    <p>
                                        <strong>Address:</strong>
                                    </p>

                                    <p>
                                        {user.address.street}, {user.address.suite}
                                    </p>

                                    <p>
                                        {user.address.city}, {user.address.zipcode}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Users;
