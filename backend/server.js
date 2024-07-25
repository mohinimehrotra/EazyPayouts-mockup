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
    {
      id: 1,
      name: "Account A1",
      balance: 1000,
      transactions: [
        { date: '2024-08-01T13:08:00', credit: 100, balance: 1000, utr: 'UTR123', acNo: 'AC123' },
        { date: '2024-08-02T13:09:00', credit: 200, balance: 1200, utr: 'UTR124', acNo: 'AC124' },
        { date: '2024-08-03T13:10:00', credit: 300, balance: 1500, utr: 'UTR125', acNo: 'AC125' },
        { date: '2024-08-04T13:11:00', credit: 400, balance: 1900, utr: 'UTR126', acNo: 'AC126' },
        { date: '2024-08-05T13:12:00', credit: 500, balance: 2400, utr: 'UTR127', acNo: 'AC127' },
        { date: '2024-08-06T13:13:00', credit: 600, balance: 3000, utr: 'UTR128', acNo: 'AC128' }
      ]
    },
    {
      id: 2,
      name: "Account A2",
      balance: 2000,
      transactions: [
        { date: '2024-08-01T13:14:00', credit: 100, balance: 2100, utr: 'UTR129', acNo: 'AC129' },
        { date: '2024-08-02T13:15:00', credit: 200, balance: 2300, utr: 'UTR130', acNo: 'AC130' },
        { date: '2024-08-03T13:16:00', credit: 300, balance: 2600, utr: 'UTR131', acNo: 'AC131' },
        { date: '2024-08-04T13:17:00', credit: 400, balance: 3000, utr: 'UTR132', acNo: 'AC132' },
        { date: '2024-08-05T13:18:00', credit: 500, balance: 3500, utr: 'UTR133', acNo: 'AC133' },
        { date: '2024-08-06T13:19:00', credit: 600, balance: 4100, utr: 'UTR134', acNo: 'AC134' }
      ]
    }
  ],
  2: [
    {
      id: 3,
      name: "Account B1",
      balance: 3000,
      transactions: [
        { date: '2024-08-01T13:20:00', credit: 100, balance: 3100, utr: 'UTR135', acNo: 'AC135' },
        { date: '2024-08-02T13:21:00', credit: 200, balance: 3300, utr: 'UTR136', acNo: 'AC136' },
        { date: '2024-08-03T13:22:00', credit: 300, balance: 3600, utr: 'UTR137', acNo: 'AC137' },
        { date: '2024-08-04T13:23:00', credit: 400, balance: 4000, utr: 'UTR138', acNo: 'AC138' },
        { date: '2024-08-05T13:24:00', credit: 500, balance: 4500, utr: 'UTR139', acNo: 'AC139' },
        { date: '2024-08-06T13:25:00', credit: 600, balance: 5100, utr: 'UTR140', acNo: 'AC140' }
      ]
    },
    {
      id: 4,
      name: "Account B2",
      balance: 4000,
      transactions: [
        { date: '2024-08-01T13:26:00', credit: 100, balance: 4100, utr: 'UTR141', acNo: 'AC141' },
        { date: '2024-08-02T13:27:00', credit: 200, balance: 4300, utr: 'UTR142', acNo: 'AC142' },
        { date: '2024-08-03T13:28:00', credit: 300, balance: 4600, utr: 'UTR143', acNo: 'AC143' },
        { date: '2024-08-04T13:29:00', credit: 400, balance: 5000, utr: 'UTR144', acNo: 'AC144' },
        { date: '2024-08-05T13:30:00', credit: 500, balance: 5500, utr: 'UTR145', acNo: 'AC145' },
        { date: '2024-08-06T13:31:00', credit: 600, balance: 6100, utr: 'UTR146', acNo: 'AC146' }
      ]
    }
  ]
}


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
