import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const user = useSelector((state) => state.user.user);

  const [products, setProducts] = useState([
    { date: '20-02-2024', product: 'Engine oil', quantity: 2, unitPrice: 75 },
    { date: '25-02-2024', product: 'Tires', quantity: 4, unitPrice: 62.5 },
    { date: '28-02-2024', product: 'Brake pads', quantity: 1, unitPrice: 50 },
    { date: '06-03-2024', product: 'Battery', quantity: 2, unitPrice: 35 },
    { date: '09-03-2024', product: 'Side mirror', quantity: 2, unitPrice: 25 },
    { date: '10-03-2024', product: 'Gear box', quantity: 1, unitPrice: 270 },
    { date: '14-03-2024', product: 'Wheels', quantity: 4, unitPrice: 117.5 },
    { date: '16-03-2024', product: 'Silencer', quantity: 2, unitPrice: 185 },
    { date: '29-03-2024', product: 'Head lights', quantity: 2, unitPrice: 50 },
    { date: '05-04-2024', product: 'Engine', quantity: 1, unitPrice: 500 },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Repair Plans</h2>
        <table className="insurance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.product}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                  />
                </td>
                <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Manage Your Account</h2>
        <button className="dashboard-button">View Profile</button>
        <button className="dashboard-button">Update Information</button>
        <button className="dashboard-button">View Your Products</button>
      </div>
    </div>
  );
};

export default UserDashboard;
