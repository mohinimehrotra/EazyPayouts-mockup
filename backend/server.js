const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let companies = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
];

let accounts = {
  1: [
    { id: 1, name: 'Account A1', balance: 1000, transactions: [{ date: '2024-07-23', credit: 100, balance: 1000, utr: 'UTR123', acNo: 'AC123' }] },
    { id: 2, name: 'Account A2', balance: 2000, transactions: [{ date: '2024-07-23', credit: 200, balance: 2000, utr: 'UTR124', acNo: 'AC124' }] },
  ],
  2: [
    { id: 3, name: 'Account B1', balance: 3000, transactions: [{ date: '2024-07-23', credit: 300, balance: 3000, utr: 'UTR125', acNo: 'AC125' }] },
    { id: 4, name: 'Account B2', balance: 4000, transactions: [{ date: '2024-07-23', credit: 400, balance: 4000, utr: 'UTR126', acNo: 'AC126' }] },
  ],
};

app.get('/api/companies', (req, res) => {
  res.json(companies);
});

app.get('/api/companies/:companyId/accounts', (req, res) => {
  const companyId = req.params.companyId;
  res.json(accounts[companyId] || []);
});

app.get('/api/accounts/:accountId', (req, res) => {
  const accountId = req.params.accountId;
  const allAccounts = Object.values(accounts).flat();
  const account = allAccounts.find(acc => acc.id == accountId);
  res.json(account || {});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
