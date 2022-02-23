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

function desiredArrayByYear(year, fullArray, key){
    let tempArray = [];
    if(year == "All Years"){   
        for(let i = 0; i<fullArray.length; i++){
            tempArray.push(fullArray[i][key]);
        }
        return tempArray;
    }
    else{
        for(let i = 0; i<fullArray.length ; i++){
            if(fullArray[i].RecordedYear == year){
                tempArray.push(fullArray[i][key]);
            }
        }
        return tempArray;
    }
}



function generateChart(labelArray, dataArray, colorOptions, chartLabel){
    const data = {
        labels: labelArray,
        datasets: [{
            label: chartLabel,
            backgroundColor:colorOptions,
            data: dataArray
        }]
    };

    const config = {
        type: 'bar',
        data,
        options: {}
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    return myChart;
}