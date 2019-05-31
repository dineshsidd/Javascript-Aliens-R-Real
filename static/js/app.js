// from data.js
var dataArray = data;
var tbody = d3.select("tbody");
//var tab = d3.select("table");
var tab_r;
//console.log(  data.filter(row => row.datetime === "1/1/2010"));

var butn = d3.select("#filter-btn");
butn.on("click" , clickHandler );

for ( let x = 0 ; x< data.length ; x++){
    tab_r =  tbody.append("tr");
    tab_r.append("td").text(data[x].datetime);
    tab_r.append("td").text(data[x].city);
    tab_r.append("td").text(data[x].state);
    tab_r.append("td").text(data[x].country);
    tab_r.append("td").text(data[x].shape);
    tab_r.append("td").text(data[x].durationMinutes);
    tab_r.append("td").text(data[x].comments);  
 };
 
 
function clickHandler(event){
    var inVal ;
    var new_data;
    new_data = data ;
    var filters = ["#datetime", "#city","#state","#country","#shape"];
    for (let x = 0 ; x < filters.length ; x++ ) {
    inVal = d3.select(filters[x]).property("value");
    if( inVal !== "") {
    new_data =  new_data.filter(row => row[filters[x].replace("#","")].toUpperCase() === inVal.toUpperCase());
    }
    };
    tbody.selectAll("tr").remove();
    if(new_data.length > 0) {
        
    for ( let x = 0 ; x< new_data.length ; x++){
        tab_r =  tbody.append("tr");
        tab_r.append("td").text(new_data[x].datetime);
        tab_r.append("td").text(new_data[x].city);
        tab_r.append("td").text(new_data[x].state);
        tab_r.append("td").text(new_data[x].country);
        tab_r.append("td").text(new_data[x].shape);
        tab_r.append("td").text(new_data[x].durationMinutes);
        tab_r.append("td").text(new_data[x].comments);  
        
     };
    // tbody.append(tab_r)
    };
}

// YOUR CODE HERE!
