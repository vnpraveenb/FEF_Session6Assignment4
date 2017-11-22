/*
    Create a JavaScript logic to dynamically display the number of table row and column.
*/

var table = document.getElementById("mytable");

 
// Function to add user specified number of rows
function addRow() {
    
    var lastrow = table.rows.length;  // To store the no.of rows in the table
    var lastcol = table.rows[0].cells.length;	 // To store no. of columns in the 1st row
    var rows = document.getElementById("row").value;     //User input stored in the variable
    var rowNumber=parseInt(rows);
    
    //For loop to add user specfied rows
    for(var j = 0; j<rowNumber;j++)
    {
      var row = table.insertRow(lastrow);
      lastrow++;
      
        //For loop to add addition cells besides the default columns
        for(i=0; i<lastcol;i++)
        {
            if(i==0)
            {
                var cell1 = row.insertCell(i);  // To insert cells in the row
                cell1.innerHTML = lastrow -1 ;
            }
            else
            {
                var cell1 = row.insertCell(i);  // To insert cells in the row
                cell1.innerHTML = " "
            }
        }
    
    } 
  
}

// Function to add user specified number of columns
function addCol() {

    var lastrow = table.rows.length; // To store the no.of rows in the table
	var lastcol = table.rows[0].cells.length; // To store no. of columns in the 1st row
    var columns = document.getElementById("col").value;     //User input stored in the variable
    var colNumber=parseInt(columns);
    
    //for loop to add user specified columns
    for(var j = 0; j<colNumber;j++)
    {
        //for each row add a column
        for(i=0; i<lastrow;i++)
        {
            var cell1 = table.rows[i].insertCell(lastcol); // To insert a cell after the last column in each row
            cell1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ";
        }
    
    }
}

// Function to remove a row
function removeRow(){
    var lastrow = table.rows.length; // To store the no.of rows in the table

    //To disallow the removal of rows when only 2 rows are left
	if(lastrow<2){ 
		alert("Stop, You have reached the minimum number of rows");
		return;
    }
    else{
        table.deleteRow(lastrow-1); // Delete row when the condition of less than 2 rows is not met     
    }
}

// Function to remove a column
function removeCol(){
    
        var lastcol = (table.rows[0].cells.length)-1; // To store no. of columns in the 1st row
        var lastrow = (table.rows.length); // To store the no.of rows in the table

        //To disallow the removal of rows when only 3 columns are left
        if(lastcol<3){
            alert("You have reached the minimal required columns.");
            return;
        }
        else{
             //for each row remove column
            for(i=0; i<lastrow;i++)
            {
                table.rows[i].deleteCell(lastcol);
            }
        }
       
    }