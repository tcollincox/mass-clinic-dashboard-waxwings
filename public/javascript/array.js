//given the Id of a html table this returns an array of Json objects that match up to the rows of your table.
function returnArrayFromTable(tableId){
    table = document.getElementById(tableId);
    columnCount = table.rows[0].cells.length;

    const labels = [];
    for(let i = 0; i < columnCount ; i++){
         labels.push(table.rows[0].cells[i].innerHTML);
    }

    tableArray = []
    for(let i = 1; i < table.rows.length ; i++){
        let tempObj = {};
        for(let j = 0; j < columnCount; j++ ){
            tempObj[labels[j]] = table.rows[i].cells[j].childNodes[0].nodeValue;
        }
        tableArray.push(tempObj);
    }

    return tableArray;
}

//given a desired year as a string ("All Years" for every year), your full data array of JSON objects, and the columnName you want an array of
// this produces an array of all of the values that were in the chosen column
function desiredArrayByYear(year, dataArray, key){
    let valueArray = [];
    if(year == "All Years"){   
        for(let i = 0; i<dataArray.length; i++){
            valueArray.push(dataArray[i][key]);
        }
        return valueArray;
    }
    else{
        for(let i = 0; i<dataArray.length ; i++){
            if(dataArray[i].RecordedYear == year){
                valueArray.push(dataArray[i][key]);
            }
        }
        return valueArray;
    }
}

//given your full data array of JSON objects, a string that is your desired lable for each bar, and a boolean choosing whether or not 
//you want to add the year automatically to your label, this will return an array of labels
function makeLabelArray(dataArray, desiredLabel, addYear, customLabel){
    let labelArray = [];
    if(addYear && customLabel){
        dataArray.forEach(data => { labelArray.push(desiredLabel + " " + data.RecordedYear); });
    }
    else if(addYear && !customLabel){
        dataArray.forEach(data => { labelArray.push(data[desiredLabel] + " " + data.RecordedYear); });
    }
    else if(!addYear && !customLabel){
        dataArray.forEach(data => { labelArray.push(data[desiredLabel]); });
    }
    else{
        dataArray.forEach(data => { labelArray.push(data[desiredLabel]); });
    }
    return labelArray;
}

//given your full data array of JSON objects and the name of the column of your years (typically names "RecordedYear") this returns an array of the years
function makeYearArray(dataArray, yearString){
    let yearArray = [];
    dataArray.forEach(data => { if(!yearArray.includes(data[yearString])) yearArray.push(data[yearString]); });
    return yearArray;
}

//given your full data array of JSON objects this returns an array of color options in rbg format
function makeColorArray(dataArray){
    let colorArray = [];
        for(let i = 0; i < dataArray.length; i++){
            colorArray.push('rgb(66, 179, 229 )');
        }
    return colorArray;
}

//given your full data array of JSON objects and how many different colors you want (1-9), a boolean of wether or not you want to alternate, and the number of years this will cover, this returns an array of color options in rbg format
function makeMultipleColorArray( numberOfColors, alternate, years){
    let colorOptions = ['rgb(66, 179, 229 )', 'rgb(26, 109, 185 )', 'rgb(23, 195, 178 )', 'rgb(13, 164, 192 )', 'rgb(3, 132, 206 )', 'rgb(45, 187, 204 )', 'rgb(49, 86, 163 )', 'rgb(11, 49, 66 )'];
    let colorArray = [];
    if(alternate){
        for(let i = 0; i< years; i++){
            for(let j = 0; j < numberOfColors; j++){
                colorArray.push(colorOptions[j]);
            }
        }
    }
    else{
        for(let i = 0; i< numberOfColors; i++){
            for(let j = 0; j < years; j++){
                colorArray.push(colorOptions[i]);
            }
        }
    }
    return colorArray;
}

//given your years array this gets your time frame dropdown and adds an option for each avalible year
function addSelectYears(years){
    let select = document.getElementById('time-frame');
    for(let i = 0; i <years.length; i++){
        let option = document.createElement("option");
        option.text = years[i];
        select.add(option);
    }
}

//given your full data array of JSON objects, a desired year and the name of your year column (typically "RecordedYear") this returns
// an array of JSON objects that only have your recorded year
function dataArrayByYear(dataArray, year, yearLabel){
    let dataArrayByYear = []
    if(year == "All Years"){
        return dataArray
    }
    else{
        dataArray.forEach( data => {
            if(data[yearLabel] == year){
                dataArrayByYear.push(data);
            }
        });
    }
    return dataArrayByYear;
}

//given an array of labels, your full data array of JSON objects, an array of color options, a string that is the label of your chart, and a string that is 
// your desired chart type this goes into the html document and adds a graph to your empty graph area.
function generateChart(labelArray, dataArray, colorOptions, chartLabel, chartType){
    const data = {
        labels: labelArray,
        datasets: [{
            label: chartLabel,
            backgroundColor:colorOptions,
            data: dataArray
        }]
    };

    const config = {
        type: chartType,
        data
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    return myChart;
}

//given an array of labels, your full data array of JSON objects, an array of color options, a string that is the label of your chart, and a string that is 
// your desired chart type this goes into the html document and adds a graph with no labels to your empty graph area .
function generateChartNoLabels(labelArray, dataArray, colorOptions, chartLabel, chartType){
    const data = {
        labels: labelArray,
        datasets: [{
            label: chartLabel,
            backgroundColor:colorOptions,
            data: dataArray
        }]
    };

    const config = {
        type: chartType,
        data,
        options: {
            plugins: {
              legend: {
                display: false
              }
            }
          }
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    return myChart;
}

function generateChartNoLabelsAll(labelArray, dataArray, colorOptions, chartLabel, chartType){
    const data = {
        labels: labelArray,
        datasets: [{
            label: chartLabel,
            backgroundColor:colorOptions,
            data: dataArray
        }]
    };

    const config = {
        type: chartType,
        data,
        options:{
            scales:{
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                  display: false
                }
            }
        }
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    return myChart;
}

function generateChartPartial(labelArray, dataArray, colorOptions, chartLabel, chartType, chartId){
    const data = {
        labels: labelArray,
        datasets: [{
            label: chartLabel,
            backgroundColor:colorOptions,
            data: dataArray
        }]
    };

    const config = {
        type: chartType,
        data,
        options:{
            scales:{
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                  display: false
                }
            }
        }
    };

    var myChart = new Chart(
        document.getElementById(chartId),
        config
    );

    return myChart;
}