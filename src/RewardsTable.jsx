import React from "react";

const RewardsTable = ({ summary, months }) => (
  <div className="table-container">
    <table className="rewards-table">
      <thead>
        <tr>
          <th>Customer</th>
          { months.map((month) => <th key={ month }>{ month }</th>) }
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        { Object.entries(summary).map(([customer, { months: monthPoints, total }]) => (
          <tr key={customer}>
            <td className="customer-name">{ customer }</td>
            { months.map((month) => <td key={ month }>{ monthPoints[month] || 0 }</td>) }
            <td className="total-points">{ total }</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

export default RewardsTable;
