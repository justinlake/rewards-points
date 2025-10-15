import React, { useEffect, useState } from "react";
import RewardsTable from "./RewardsTable";
import "./App.css";

const calculatePoints = (amount) => {
  const over100 = Math.max(amount - 100, 0);
  const between50And100 = Math.max(Math.min(amount, 100) - 50, 0);
  return over100 * 2 + between50And100;
};

const getMonthKey = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
};

const App = () => {
  const [summary, setSummary] = useState({});
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((res) => setTimeout(res, 800));
        const response = await fetch("/transactions.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const transactions = await response.json();

        const { summary, monthSet } = transactions.reduce(
          (acc, { customer, amount, date }) => {
            const month = getMonthKey(date);
            const points = calculatePoints(amount);
            acc.monthSet.add(month);
            acc.summary[customer] ??= { total: 0, months: {} };
            acc.summary[customer].months[month] =
              (acc.summary[customer].months[month] || 0) + points;
            acc.summary[customer].total += points;
            return acc;
          },
          { summary: {}, monthSet: new Set() }
        );

        const sortedMonths = Array.from(monthSet).sort(
          (a, b) => new Date(a) - new Date(b)
        );
        setMonths(sortedMonths);
        setSummary(summary);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>Customer Reward Points</h2>
      {
        loading
          ? <div className="loading">Loading data...</div>
          : <RewardsTable summary={ summary } months={ months } />
      }
    </div>
  );
};

export default App;