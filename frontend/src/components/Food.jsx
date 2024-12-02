import { useEffect, useState } from 'react';
import axios from 'axios';

const FoodVendorsList = () => {
    const [foodVendors, setFoodVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/foodvendors')
            .then(response => {
                setFoodVendors(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleVendorClick = (vendor) => {
        setSelectedVendor(vendor);
    };

    const handleBack = () => {
        setSelectedVendor(null);
    };

    return (
        <div className="container mt-5 p-4" style={{ maxWidth: '1000px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Available Food Vendors</h2>

            {selectedVendor ? (
                <div>
                    <button
                        className="btn btn-secondary mb-3"
                        onClick={handleBack}
                        style={{ backgroundColor: '#007BFF', borderColor: '#007BFF', color: '#fff' }}
                    >
                        Back to Vendors
                    </button>
                    <div className="text-center">
                        <h3 className="mb-3">{selectedVendor.name}</h3>
                        <img
                            src={selectedVendor.logo}
                            alt={`${selectedVendor.name} Logo`}
                            className="img-fluid mb-4"
                            style={{ maxHeight: '250px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                        <p><strong>Location:</strong> {selectedVendor.location}</p>
                        <p><strong>Description:</strong> {selectedVendor.description}</p>
                    </div>
                    <h4 className="mt-4" style={{ color: '#007BFF' }}>Menu Items</h4>
                    {selectedVendor.menuItems.length > 0 ? (
                        <ul className="list-group">
                            {selectedVendor.menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: '#fdfdfd',
                                        borderColor: '#ddd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                    }}
                                >
                                    <img
                                        src={item.photoUrl}
                                        alt={item.itemName}
                                        className="img-thumbnail"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <strong>{item.itemName}</strong>
                                        <p style={{ marginBottom: 0 }}>${item.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted">No menu items available.</p>
                    )}
                </div>
            ) : (
                <div className="row">
                    {foodVendors.map((vendor) => (
                        <div key={vendor._id} className="col-md-4 mb-4">
                            <div
                                className="card h-100"
                                onClick={() => handleVendorClick(vendor)}
                                style={{
                                    cursor: 'pointer',
                                    border: 'none',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <img
                                    src={vendor.logo}
                                    alt={`${vendor.name} Logo`}
                                    className="card-img-top"
                                    style={{ maxHeight: '150px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{vendor.name}</h5>
                                    <p className="card-text">
                                        <strong>Location:</strong> {vendor.location}
                                    </p>
                                    <p className="card-text">
                                        <strong>Description:</strong> {vendor.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FoodVendorsList;
