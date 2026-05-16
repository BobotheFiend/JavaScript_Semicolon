const account = {accountName: "David", balance: 500};

function balanceChecker(account){

let theBalIs = (account.balance < 1000) ? account.balance = "Low Balance" : account.balance = "Sufficient Funds";
    let {balance} = account
    return {balance};

}

console.log(balanceChecker(account));
