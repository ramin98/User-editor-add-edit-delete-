function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var number=document.getElementById("number_row"+no);
	
 var name_data=name.innerHTML;
 var number_data=number.innerHTML;

 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 number.innerHTML="<input type='text' id='number_text"+no+"' value='"+number_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var number_val=document.getElementById("number_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("number_row"+no).innerHTML=number_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 console.log("AJAX Request"); // Вот и имитиация Аякса Вам ))
 var new_name=document.getElementById("new_name").value;
 var new_number=document.getElementById("new_number").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
  if (new_number > 8){
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='number_row"+table_len+"'>"+new_number+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
  }

   else {
    alert("Enter valid phone format")
  }

 document.getElementById("new_name").value="";
 document.getElementById("new_number").value="";
 
  
  
 
}
