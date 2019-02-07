var income = 0;
var monthlyIncome = 0;
var primaryExpenses = 0;
var primaryExpensesRate = 0;
var utilities = 0;
var utilitiesRate = 0;
var secondaryExpenses = 0;
var secondaryExpensesRate = 0;
var savings = 0;
var savingsRate = 0;
var excessFunds = 0;

//Open Menu Function
function toggleNav() {
    let nav = document.getElementById('navBar');
    let topBar = document.getElementById('topBar');
    let middleBar = document.getElementById('middleBar');
    let bottomBar = document.getElementById('bottomBar');

    if (nav.style.width == "23%") {
        nav.style.width = "70px";
        topBar.style.width = "";

        bottomBar.style.transform = "rotate(0deg)";
        topBar.style.transform = "rotate(0deg)";
        middleBar.style.opacity = "1";

        setTimeout (function(){
            bottomBar.style.top = "20px";
            topBar.style.top = "0px";
        }, 500)

    }
    else {
        nav.style.width = "23%";
        topBar.style.width= "100%";

        topBar.style.top = "10px";
        bottomBar.style.top = "10px";

        setTimeout (function(){
            middleBar.style.opacity = "0";
            topBar.style.transform = "rotate(45deg)";
            bottomBar.style.transform = "rotate(-45deg)";
        }, 500)
    }
}


function printReport() {

    //Income
    income =
    parseInt(document.getElementById("primary-income").value) + parseInt(document.getElementById("secondary-income").value);
    document.getElementById("income-report").innerHTML = income;

    monthlyIncome =income/12
    document.getElementById("income-report-monthly").innerHTML = monthlyIncome;

    //Primary expenses
    primaryExpenses =
    parseInt(document.getElementById("housing-payments").value) +
    parseInt(document.getElementById("loans").value) +
    parseInt(document.getElementById("health-insurance").value) +
    parseInt(document.getElementById("transportation").value) +
    parseInt(document.getElementById("cell-phone-bill").value) +
    parseInt(document.getElementById("groceries").value) +
    parseInt(document.getElementById("clothing").value);
    document.getElementById("primary-expenses-report").innerHTML = primaryExpenses;

    //Primary Expenses Rate
    primaryExpensesRate = ((primaryExpenses / monthlyIncome) * 100).toFixed();
    document.getElementById("primary-expenses-rate").innerHTML = primaryExpensesRate;

    //Utilities
    utilities = 
    parseInt(document.getElementById("gas").value) +
    parseInt(document.getElementById("electric").value) +
    parseInt(document.getElementById("water").value) +
    parseInt(document.getElementById("cable-internet").value);
    document.getElementById("utilities-report").innerHTML = utilities;

    //Utilities Rate
    utilitiesRate = ((utilities / monthlyIncome) * 100).toFixed();
    document.getElementById("utilities-rate").innerHTML = utilitiesRate;

    //Secondary Expenses
    secondaryExpenses =
    parseInt(document.getElementById("monthly-subscriptions").value) +
    parseInt(document.getElementById("miscellaneous").value);
    document.getElementById("secondary-expenses-report").innerHTML = secondaryExpenses;

    //Secondary Expenses Rate
    secondaryExpensesRate = ((secondaryExpenses / monthlyIncome) * 100).toFixed();
    document.getElementById("secondary-expenses-rate").innerHTML = secondaryExpensesRate;

    //Savings
    savings =
    parseInt(document.getElementById("primary-savings").value) +
    parseInt(document.getElementById("emergency-funds").value) +
    parseInt(document.getElementById("vacation-funds").value);
    document.getElementById("savings-report").innerHTML = savings;

    savingsRate = ((savings / monthlyIncome) * 100).toFixed();
    document.getElementById("savings-rate").innerHTML = savingsRate;

    //Excess Funds
    excessFunds = monthlyIncome - primaryExpenses - utilities - secondaryExpenses - savings;
}

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawUserChart);

function drawUserChart() {

var data = new google.visualization.DataTable();
data.addColumn('string', 'Category');
data.addColumn('number', 'Percentage');
data.addRows([
    ['Primary Expenses', primaryExpenses],
    ['Utilities', utilities],
    ['Secondary Expenses', secondaryExpenses],
    ['Savings', savings],
    ['Excess Funds', excessFunds]
]);

var options = {
    title: "Monthly Spending by Category",
    backgroundColor: "#F7F5E6",
    pieSliceBorderColor: "#F7F5E6"
};

var userChart = new google.visualization.PieChart(document.getElementById('userChart'));
userChart.draw(data, options);
}
