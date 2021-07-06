// from data.js
var tableData = data;

// YOUR CODE HERE!
function BuildTable(newTableData){
    var tbody = d3.select("tbody")
    tbody.html("")
    newTableData.forEach(row => {
        var currRow = tbody.append("tr")
        Object.values(row).forEach(cell => {
            currRow.append("td").text(cell)
        })
    })
}

function filterData(){
    var userInput = d3.select("#datetime")
    var inputValue = userInput.property("value")
    //var inputKey = userInput.attr("id")
    var filterData = tableData
    filterData = filterData.filter(row => row.datetime == inputValue)
    BuildTable(filterData)
}

function filterTest(){
    var dateValue = d3.select("#datetime").property("value")
    var shapeValue = d3.select("#shape").property("value")
    //var inputKey = userInput.attr("id")
    var filterData = tableData
    if (dateValue){
        filterData = filterData.filter(row => row.datetime == dateValue)  
    }   
    if (shapeValue){
        filterData = filterData.filter(row => row.shape == shapeValue)  
    }

    BuildTable(filterData)
}

BuildTable(tableData)

d3.select("#filter-btn").on("click",filterTest)


