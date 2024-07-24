document.addEventListener("DOMContentLoaded", function() {
    const companySelect = document.getElementById("company-select");
    const accountSelect = document.getElementById("account-select");
    const balanceInfo = document.getElementById("balance-info");
    const balanceAmount = document.getElementById("balance-amount");
    const tableData = document.getElementById("table-data");
    const transactionDates = document.getElementById("transaction-dates");
    const transactionCredits = document.getElementById("transaction-credits");
    const transactionBalances = document.getElementById("transaction-balances");
    const transactionUtrs = document.getElementById("transaction-utrs");
    const transactionAcNos = document.getElementById("transaction-acnos");
    async function fetchCompanies() {
        try {
            const response = await fetch("http://localhost:3000/api/companies");
            const data = await response.json();
            populateCompanyDropdown(data);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    }
    function populateCompanyDropdown(companies) {
        companies.forEach((company)=>{
            const option = document.createElement("option");
            option.value = company.id;
            option.text = company.name;
            companySelect.appendChild(option);
        });
    }
    companySelect.addEventListener("change", async function() {
        const companyId = this.value;
        accountSelect.innerHTML = '<option value="">Select Account</option>';
        accountSelect.disabled = companyId === "";
        balanceInfo.hidden = true;
        tableData.hidden = true;
        if (companyId !== "") try {
            const response = await fetch(`http://localhost:3000/api/companies/${companyId}/accounts`);
            const data = await response.json();
            populateAccountDropdown(data);
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    });
    function populateAccountDropdown(accounts) {
        accounts.forEach((account)=>{
            const option = document.createElement("option");
            option.value = account.id;
            option.text = account.name;
            accountSelect.appendChild(option);
        });
    }
    accountSelect.addEventListener("change", async function() {
        const accountId = this.value;
        balanceInfo.hidden = true;
        tableData.hidden = true;
        if (accountId !== "") try {
            const response = await fetch(`http://localhost:3000/api/accounts/${accountId}`);
            const account = await response.json();
            displayAccountInfo(account);
        } catch (error) {
            console.error("Error fetching account details:", error);
        }
    });
    function displayAccountInfo(account) {
        balanceAmount.textContent = `\u{20B9} ${account.balance}`;
        balanceInfo.hidden = false;
        // Clear previous transactions
        transactionDates.innerHTML = "";
        transactionCredits.innerHTML = "";
        transactionBalances.innerHTML = "";
        transactionUtrs.innerHTML = "";
        transactionAcNos.innerHTML = "";
        account.transactions.forEach((transaction)=>{
            const dateDiv = document.createElement("div");
            dateDiv.textContent = transaction.date;
            transactionDates.appendChild(dateDiv);
            const creditDiv = document.createElement("div");
            creditDiv.textContent = transaction.credit;
            transactionCredits.appendChild(creditDiv);
            const balanceDiv = document.createElement("div");
            balanceDiv.textContent = transaction.balance;
            transactionBalances.appendChild(balanceDiv);
            const utrDiv = document.createElement("div");
            utrDiv.textContent = transaction.utr;
            transactionUtrs.appendChild(utrDiv);
            const acNoDiv = document.createElement("div");
            acNoDiv.textContent = transaction.acNo;
            transactionAcNos.appendChild(acNoDiv);
        });
        tableData.hidden = false;
    }
    fetchCompanies();
});

//# sourceMappingURL=index.672d4772.js.map
