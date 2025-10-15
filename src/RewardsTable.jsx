import React from "react";

const RewardsTable = ({ summary, months }) => (
  <div className="table-container">
    <table className="rewards-table">
      <thead>
        <tr>
          <th scope="col">Customer</th>
          { months.map((month) => <th key={ month } scope="col">{ month }</th>) }
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        { Object.entries(summary).map(([customer, { months: monthPoints, total }]) => (
          <tr key={ customer }>
            <th className="customer-name" scope="row">{ customer }</th>
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
