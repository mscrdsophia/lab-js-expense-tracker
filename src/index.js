// Entry
class Entry {
    constructor (date, amount,description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry{
    constructor (date, amount, description){
super (date, amount,description)
this.amount = amount;
this.description = description;
this.type = "income";
    }
}
    

// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super(date,amount, description)
        this.amount = amount;
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(newEntry){
        this.entries.push(newEntry);
    }
    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0;
        }
       let  totalIncome = 0;
       let totalExpense = 0;

       this.entries.forEach(entry => {
        if (entry.type === "income"){
            totalIncome += entry.amount;
        }
        else if (entry.type === "expense") {
            totalExpense += Math.abs(entry.amount);
        }
       });
       return totalIncome - totalExpense;
    }

}
