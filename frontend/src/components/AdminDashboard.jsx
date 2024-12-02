import { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [logo, setLogo] = useState('');
    const [menuItems, setMenuItems] = useState([{ itemName: '', price: '', photoUrl: '' }]);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/add-foodvendor', {
            name,
            location,
            description,
            logo,
            menuItems,
            vendorEmail: "vendor@example.com"
        })
        .then(response => {
            alert(response.data.message);
            setName('');
            setLocation('');
            setDescription('');
            setLogo('');
            setMenuItems([{ itemName: '', price: '', photoUrl: '' }]);
        })
        .catch(err => console.log(err));
    };

    const handleMenuItemChange = (index, field, value) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index][field] = value;
        setMenuItems(updatedMenuItems);
    };

    const addMenuItem = () => {
        setMenuItems([...menuItems, { itemName: '', price: '', photoUrl: '' }]);
    };

    const removeMenuItem = (index) => {
        const updatedMenuItems = menuItems.filter((_, i) => i !== index);
        setMenuItems(updatedMenuItems);
    };

    return (
        <div className="container mt-5 p-4" style={{ maxWidth: '800px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Add Food Vendor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="form-label fw-bold">Vendor Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter vendor name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter vendor location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter vendor description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">Logo URL</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter logo URL"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        required
                    />
                </div>
                <h4 className="mb-3" style={{ color: '#007BFF' }}>Menu Items</h4>
                {menuItems.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className="d-flex align-items-center gap-3 mb-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Item Name"
                                value={item.itemName}
                                onChange={(e) => handleMenuItemChange(index, 'itemName', e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                className="form-control me-2"
                                placeholder="Price"
                                value={item.price}
                                onChange={(e) => handleMenuItemChange(index, 'price', e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Photo URL"
                                value={item.photoUrl}
                                onChange={(e) => handleMenuItemChange(index, 'photoUrl', e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeMenuItem(index)}
                            >
                                Remove
                            </button>
                        </div>
                        {item.photoUrl && (
                            <img
                                src={item.photoUrl}
                                alt={item.itemName}
                                className="img-thumbnail"
                                style={{ maxWidth: '150px', maxHeight: '100px' }}
                            />
                        )}
                    </div>
                ))}
                <button type="button" className="btn btn-secondary mb-3" onClick={addMenuItem}>
                    Add Menu Item
                </button>
                <button type="submit" className="btn btn-primary w-100">
                    Add Vendor
                </button>
            </form>
        </div>
    );
};

export default AdminDashboard;
