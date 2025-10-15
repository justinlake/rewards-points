# 🏆 Customer Rewards Points App

A simple React application that simulates a retailer’s **customer rewards program**.
The app calculates monthly and total reward points for each customer based on their transaction history.

---

## 📋 Features

- Calculates reward points based on spending tiers:
  - **2 points** for every dollar spent **over $100**
  - **1 point** for every dollar spent **between $50 and $100**
- Simulates an asynchronous API call fetching data from a local JSON file.
- Displays results in a **horizontally scrollable table**, grouped by **month** and **customer**.
- Clean, modular architecture with a separate `RewardsTable` component.
- Built using **Vite** for a fast, modern development setup.

---

## 🧮 Example Calculation

| Transaction Amount | Calculation | Points |
|--------------------|--------------|--------|
| $120 | 2×(120−100) + 1×(100−50) | **90** |
| $75  | 1×(75−50) | **25** |
| $40  | N/A | **0** |

---

## 🏗️ Project Structure

```
src/
├── App.js              # Main component: fetches data & computes summary
├── RewardsTable.js     # Presentation component for the points table
├── App.css             # Basic styles
└── main.jsx            # Application entry point
public/
└── transactions.json   # Mock transaction data (simulated API)
```

---

## ⚙️ Getting Started

### 1. Clone and install dependencies
```bash
git clone https://github.com/justinlake/rewards-points.git
cd rewards-points
npm install
```

### 2. Run the app (Vite)
```bash
npm run dev
```

Then open the local development URL (usually `http://localhost:3000`).

---

## 🧠 Technical Highlights

- **Functional React hooks** (`useState`, `useEffect`)
- **Pure utility functions** (`calculatePoints`, `getMonthKey`)
- **Functional aggregation** via `Array.reduce`
- **CSS-based horizontal scroll** for wide tables

---

## 🧾 Data Example

`transactions.json` simulates real purchase history:

```json
[
  { "customer": "Sarah Connor", "amount": 120, "date": "2025-07-05" },
  { "customer": "James Bond", "amount": 95, "date": "2025-08-22" },
  { "customer": "Tim Burton", "amount": 140, "date": "2025-09-22" }
]
```

---

## ✅ Notes

- Transactions are grouped by month using a formatted month key like `Jul 2025`.
- The `calculatePoints` function uses `Math.max`/`Math.min` to avoid branching.
- The app reads `public/transactions.json` to simulate an external API; replace with a real endpoint later if needed.

---

## 📜 License

This project is open source and available under the MIT License.
