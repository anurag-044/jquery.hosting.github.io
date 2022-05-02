$(document).ready(function () {
    
    RunValidation();
    complete();
    showtable()

    $("#title_l").hide();
    $("#desc_l").hide();
    $("#name_l").hide();
    $("#email_l").hide();
    $("#title_l-give").hide();
    $("#name_l-give").hide();

   var title_ch = true;
   var desc_ch = true;
   var name_ch = true;
   var email_ch = true;
   var task_ch = true;
   var name_for_task = true;
   var index = 0;
   var loc;

   function RunValidation(params) {

    $("#title").blur(function (e) { 
        e.preventDefault();
        $("#title_l").hide();
        
    });

    $("#desc").blur(function (e) { 
        e.preventDefault();
        $("#desc_l").hide();
        
    });

    $("#name").blur(function (e) { 
        e.preventDefault();
        $("#name_l").hide();
    });

    
    $("#email").blur(function (e) { 
        e.preventDefault();
        $("#email_l").hide();
    });

    $("#project").blur(function (e) { 
        e.preventDefault();
        $("#title_l-give").hide();
    });

    $("#name-give").blur(function (e) { 
        e.preventDefault();
        $("#name_l-give").hide();
    });

    $("#title").keyup(function (e) { 
        titleCheck()
    });

    $("#title").focus(function (e) { 
        e.preventDefault();
        titleCheck()
        
    });

    
    $("#desc").keyup(function (e) { 
       descCheck()
    });

    $("#desc").focus(function (e) { 
        e.preventDefault();
        descCheck()
        
    });

    $("#name").focus(function (e) { 
        e.preventDefault();
        nameCheck()
    });
    
    $("#name").keyup(function (e) { 
        nameCheck()
    });

    $("#email").focus(function (e) { 
        e.preventDefault();
        emailCheck()
    });
    
    $("#email").keyup(function (e) { 
        emailCheck()
    });

    $("#project").focus(function (e) { 
        e.preventDefault();
        CheckTask()

    });
   
    // $("#project").keyup(function (e) { 
       
    //     CheckTask2()
    // });

    $("#name-give").focus(function () { 
  
        CheckNameforTask()
    });

//        $("#name-give").keyup(function () { 
//            CheckNameforTask2()
//        });
   }

   
    function titleCheck() {

        var title = $("#title").val();
        var regex_title =  /^[^0-9][a-zA-Z0-9_*\s+]{3,20}$/gm;

        if(title==null || title === ""){
            $("#title_l").show();
            $("#title_l").html("Please enter a value");
            $("#title_l").css("color", "red");
            title_ch = false;
            return false;
        }
       else if(!regex_title.test(title))
        {
            $("#title_l").show();
            $("#title_l").html("Enter more then 3 char and less then 20");
            $("#title_l").css("color", "red");
            title_ch = false;
            return false;

        }
        else{
            $("#title_l").hide();
            title_ch = true;
            return true;
          
            
        }

    }

    function descCheck() {
        
        var desc = $("#desc").val();
        var regex_desc =  /^[^0-9][a-zA-Z0-9_*\s+]{3,30}$/gm;
        if(desc==null || desc === ""){
            $("#desc_l").show();
            $("#desc_l").html("Please enter a value");
            $("#desc_l").css("color", "red");
            desc_ch = false;
            return false;
        }
       else if(!regex_desc.test(desc))
        {
            $("#desc_l").show();
            $("#desc_l").html("Enter more then 3 char and less then 20");
            $("#desc_l").css("color", "red");
            desc_ch = false;
            return false;

        }
        else{
            $("#desc_l").hide();
            desc_ch = true;
            return true;
         
        }

    }

    function nameCheck() {
        
        var name = $("#name").val();
        var regex_name = /^[A-Za-z ]{3,20}$/;

        if (name == null || name === "") {
            $("#name_l").show();
            $("#name_l").html("Please enter your name");
            $("#name_l").css("color", "red");
            name_ch = false;
            return false;
        } else if (!regex_name.test(name)) {
            $("#name_l").show();
            $("#name_l").html(
                "Name should be more then 3 and less than 20 "
            );
            $("#name_l").css("color", "red");
            name_ch = false;
            return false;
        } else {
            $("#name_l").hide();
            name_ch = true;
            return true;
        }

    }

    function emailCheck() {
            var email = $("#email").val();
            var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
            var userdb = localStorage.getItem("userdb");
            var userArray = JSON.parse(userdb);
            for(let key in userArray)
            {
                if(userArray[key].email == email)
                {
                    $("#email_l").show();
                     $("#email_l").html("Duplicate value not allowed");
                     $("#email_l").css("color", "red");
                        email_ch = false;
                         return false;

                }
            }
            if (email== null || email == "") {
                $("#email_l").show();
                $("#email_l").html("Please enter your email");
                $("#email_l").css("color", "red");
                email_ch = false;
                return false;
            } else if (!regex_email.test(email)) {
                $("#email_l").show();
                $("#email_l").html("Email is invalid");
                $("#email_l").css("color", "red");
                email_ch = false;
                return false;
            } else {
                $("#email_l").hide();
                email_ch = true;
                return true;
            }
      
    }

    function CheckTask() {

        var task = $("#project").val();
   

        if(task==null || task== ""){
            $("#title_l-give").show();
            $("#title_l-give").html("Enter a backspace for autosugesstion");
            $('#title_l-give').css("color", "red");
            task_ch = false;
            return false
        }
        else{
            
            $("#title_l-give").hide();
            task_ch = true;
            return true;
        }

    }

    // function CheckTask2(){
    //     // debugger
    //     var taskdb = localStorage.getItem("taskdb");
    //     var taskArray = JSON.parse(taskdb);
    //     var task = $("#project").val();

    //     for(let key in taskArray)
    //     {
    //         // console.log(taskArray[key].title);
    //         if(taskArray[key].title == task)
    //         {
    //             // console.log(taskArray[key].title);
    //             $("#title_l-give").hide();
              
              
    //            task_ch = true
                
    //         }
    //         else if(taskArray[key].title != task){
    //             $("#title_l-give").show();
    //             $("#title_l-give").html("invalid value");
    //             $('#title_l-give').css("color", "red");

    //             task_ch = false
               
    //         }
                

    //     }
       


    // }
function CheckNameforTask() {
    
    var name = $("#name-give").val();
   

    if(name==null || name== ""){
        $("#name_l-give").show();
        $("#name_l-give").html("Enter a backspace for autosugesstion");
        $('#name_l-give').css("color", "red");
        name_for_task = false;
        return false
    }
    else{
        
        $("#title_l-give").hide();
        name_for_task = true;
        return true;
    }
}

// function CheckNameforTask2(){

//     var userdb = localStorage.getItem("userdb");
//         var userArray = JSON.parse(userdb);
//         var name = $("#name-give").val();

//         for(let st in userArray)
//         {
//             if(!userArray[st].user == name)
//             {
//                 $("#name_l-give").show();
//                 $("#name_l-give").html("outside value not allowed");
//                 $('#name_l-give').css("color", "red");
                
              
                
//             }
//             name_for_task = false;
//         }
//         name_for_task = true
// }


    $("#addtask").click(function (e) { 
        e.preventDefault();

        titleCheck();
        descCheck();
        var title = $("#title").val();
        var desc = $("#desc").val();

        let obj =
        {
            title: `${title}`,
            label: `${title}`,
            desc: `${desc}`
        }
        
    if (title_ch == true && desc_ch == true) {

        var taskdb = localStorage.getItem("taskdb");
        var taskArray = JSON.parse(taskdb);
        var taskArrayBlank = [];
      
            if (taskdb == null) {
                taskArrayBlank.push(obj);
                localStorage.setItem("taskdb",JSON.stringify(taskArrayBlank)
                );
            } else {
                taskArray.push(obj);
                localStorage.setItem("taskdb",JSON.stringify(taskArray)
                );
            }
            location.reload()
    }
        else{
            console.log("error");
            return false
            
        }
        
    });

    $("#adduser").click(function (e) { 
        e.preventDefault();

        nameCheck();
        emailCheck();
       var name = $("#name").val();
       var email = $("#email").val();
        let obj =
        {
            user: `${name}`,
            label: `${name}`,
                email : `${email}`
        }
        
    if (name_ch == true && email_ch == true) {

        var userdb = localStorage.getItem("userdb");
        var userArray = JSON.parse(userdb);
        var userArrayBlank = [];
      
            if (userdb == null) {
                userArrayBlank.push(obj);
                localStorage.setItem("userdb",JSON.stringify(userArrayBlank)
                );
            } else {
                userArray.push(obj);
                localStorage.setItem("userdb",JSON.stringify(userArray)
                );
            }
            location.reload()
    }
        else{
            console.log("error");
            return false;
           
        }
        
    });

    $("#givetask").click(function (e) { 
        e.preventDefault();
        editdata()
        CheckTask()
        // CheckTask2()
        CheckNameforTask()
        // CheckNameforTask2()
        var task = $("#project").val();
        var name = $("#name-give").val();

      
        
        var userdb = localStorage.getItem("userdb");
        var userArray = JSON.parse(userdb);

        var emailstr = ""

        for(let i=0; i<userArray.length; i++){

            if(userArray[i].user==name){
                emailstr = userArray[i].email;
            }
        }

        let obj = {
            task : `${task}`,
            name: `${name}`,
            email: `${emailstr}`
        }

        if(task_ch==true && name_for_task == true)
        {
            var taskDetails = localStorage.getItem("taskDetails")
            var taskArray = JSON.parse(taskDetails)
            var taskArrayBlank = []
            if(index==0){
             if(taskDetails==null){
                 taskArrayBlank.push(obj);
                 localStorage.setItem("taskDetails",JSON.stringify(taskArrayBlank))
      
             }
              
             else{
                 taskArray.push(obj)
                 localStorage.setItem("taskDetails",JSON.stringify(taskArray))
      
             }
     
            }
            else if(index==1){
     
             taskArray.splice(loc,1,obj)
             localStorage.setItem("taskDetails",JSON.stringify(taskArray))
     
            }
           
            location.reload()

        }
        else{
            return false;
        }

        
    });

    function showtable() {

        var taskDetails = localStorage.getItem("taskDetails")
        var taskArray = JSON.parse(taskDetails)
        if(taskDetails==null){
            return
        }

        var table = "<table id='myTableData' border='1' cellpadding='10'>";
        table += "<tr>";
        table += "<th>Task</th>";
        table += "<th>Name</th>";
        table += "<th>Email</th>";
        for (let i = 0; i < taskArray.length; i++) {
            table += "<tr>";
            for (const key in taskArray[i]) {
                table += "<td>" + taskArray[i][key] + "</td>";
            }
            table += "<td>" + '<img src="pen-to-square-solid.svg" class="update"  alt="" width="25px">' + "</td>";
            table += "<td>" + ' <img src="trash-can-solid.svg" class="del" alt="" width="25px">' + "</td>";


            table += "</tr>";
        }
        table += "</table>";
        $("#mydata").html(table);
        deleteData()
        editdata()
    

    }

    function deleteData() {
        var del = $(".del");
        var taskDetails = localStorage.getItem("taskDetails")
        var taskArray = JSON.parse(taskDetails)
        for (let i = 0; i < del.length; i++) {
            $(del[i]).click(function () {
                if(confirm("Are you sure you want to delete this data"))
                {
                    taskArray.splice(i, 1);
                localStorage.setItem(
                    "taskDetails",
                    JSON.stringify(taskArray)
                );
                    
                }
              location.reload()
              showtable()
            });
        }
    }

function editdata() {

        var update = $(".update");
        var taskDetails = localStorage.getItem("taskDetails");
        var taskArray = JSON.parse(taskDetails);
     
     
        for (let i = 0; i < update.length; i++) {
            $(update[i]).click(function () {   

                $("#project").val(taskArray[i].task);
                $("#name-give").val(taskArray[i].name);

                              
                    loc = i;
                
                index = 1;
            });
        }
    }

function complete(){
    // debugger
        var taskdb = localStorage.getItem("taskdb");
        var taskArray = JSON.parse(taskdb);
  
        var userdb = localStorage.getItem("userdb");
        var userArray = JSON.parse(userdb);

        var taskDetails = localStorage.getItem("taskDetails")
        var taskUserArray = JSON.parse(taskDetails)
   
        for(let key in taskUserArray){
            for(let key2 in taskArray )
            {   
                if(taskUserArray[key].task==taskArray[key2].title ){
                    taskArray.splice(key2,1)     
                }        
            }
        }  
        if(taskdb==null || userdb ==null){
            return
        }


        $( "#project" ).autocomplete({
           
            minLength: 0,
            delay:0,
            source: taskArray,
            focus: function( event, ui ) {
                $( "#project" ).val( ui.item.title );
                return false;
              },
            select: function( event, ui ) {
              $( "#project" ).val( ui.item.title );
              return false;
            }
          })
          .autocomplete( "instance" )._renderItem = function( ul, item ) {
            return $( "<li>" )
              .append( "<div>" + item.title + "<br>" + item.desc + "</div>" )
              .appendTo( ul );
          };




          $( "#name-give" ).autocomplete({
            minLength: 0,
            delay:0,
            source: userArray,
           
           
            select: function( event, ui ) {
              $( "#name-give" ).val( ui.item.user );
              return false;
            }
          })
          .autocomplete( "instance" )._renderItem = function( ul, item ) {
            return $( "<li>" )
              .append( "<div>" + item.user + "<br>" + item.email + "</div>" )
              .appendTo( ul );
          };   
    }

});