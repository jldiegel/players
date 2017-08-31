(function(){

  $(function (){

    let radioID


    function getPlayers(){
      $.get("http://localhost:1337/player/",
        function(playerData){
          $("#playerTable").html("")
          $.each(playerData, function(index, players){
            $("#playerTable").append(`
              <tr>
                <td><input type="radio" class="radio" name="radio" data-id="${players.id}" autocomplete="off"></td>
                <td><input type="radio" class="radio" name="radio" data-id="${players.id}" autocomplete="off"></td>
                <td>${players.firstName +" "+ players.lastName}</td>
                <td>${players.position}</td>
                <td>${players.number}</td>
              </tr>
              `)
            })
        })
    }

    getPlayers()


    $("#playerTable").on("click", ".radio", function(e){
      radioID = $(this).data("id")
      console.log(radioID)
    })


    $("#deleteButton").click(function(){
      deleteRecord(radioID)
    })

    function deleteRecord(id){
      $.ajax({
          url: "http://localhost:1337/player/"+id,
          type: 'DELETE',
          success: function(result) {
            getPlayers()
          }
        })
    }


    $("#playerForm").click(function(e){
      e.preventDefault()
    })

    $("#submitPlayer").click(function(data){
      $.post("http://localhost:1337/player/", $("#playerForm").serialize(),function(){
        getPlayers()
        $("#playerForm")[0].reset()
      })
    })



    //Eric's Code

    // function fetchStudents(){
    //   $.get("http://localhost:1337/student/", function(students){
    //     $("studentList").empty()
    //     for (var i = 0; i < players.length; i++){
    //       $("#studentList").append(`
    //         <tr>
    //           <td>${students[i].first_name}</td>
    //           <td>${students[i].last_name}</td>
    //           <td><button data-studentid="${students[i].student_id}" class="btn btn-danger deleteButton">Delete Record</button></td>
    //         </tr>
    //         `)
    //     }
    //   })
    // }
    //
    // fetchStudents()
    //
    // $("studentList").on("click", ".deleteButton", function(){
    //   let studentId = $(this).data("studentid")
    //   $.ajax({
    //     url: "http://localhost:1337/student/" + studentID,
    //     method: "DELETE"
    //     success: function(data){
    //       fetchStudents()
    //
    //     }
    //   })
    // })
    //
    // $("#submitStudentButton").click(function(e){
    //   e.preventDefault()
    //   $.post("http://localhost:1337/student/", $("#studentAddForm").serialize(), function(data){
    //       alert("data added")
    //     })
    // })
    //
    //
    //  Edit - you need a table just like the one for delete - change button to edit, and change the table id
    //

    // //variable to hold current student we have selected for edit
    // let currentStudent;
    //
    // //disable all input fields at first
    // $("#studentAddForm :input").prop("disabled", true);
    //
    // //put the get request in a function so it can be reused
    // function fetchStudents(){
    //   //make request to get data from the api
    //   $.get("http://localhost:1337/student", function(students){
    //
    //     //clear out existing student list
    //     $("#studentList").empty()
    //
    //     //loop over students we got back from the api and add to tbody with id of studentList
    //     for (let i = 0; i < students.length; i++) {
    //       $("#studentList").append(`
    //         <tr>
    //           <td>${students[i].first_name}</td>
    //           <td>${students[i].last_name}</td>
    //           <td><button data-studentid="${students[i].student_id}" class="btn btn-primary editButton">Edit Record</button></td>
    //         </tr>
    //       `)
    //     }
    //
    //   })
    // }
    //
    // //inital load of our student data in our table
    // fetchStudents();
    //
    // $("#studentList").on("click", ".editButton", function(){
    //
    //   //store current student in variable for when we submit the form
    //   //we need this to know what student we are updating
    //   //variable declared on line 5
    //   currentStudent = $(this).data("studentid");
    //
    //   $.get("http://localhost:1337/student/" + currentStudent, function(student){
    //
    //     //loop over the student i got back from the api
    //     $.each(student, function(key, val){
    //         //find the input field that matches the name of the key
    //         let el = $('[name="'+key+'"]');
    //         //find the type of field that we selected
    //         let type = el.attr('type');
    //
    //         //based on the type choose how we set the value
    //         switch(type){
    //             case 'checkbox':
    //                 el.attr('checked', 'checked');
    //                 break;
    //             case 'radio':
    //                 el.filter('[value="'+val+'"]').attr('checked', 'checked');
    //                 break;
    //             default:
    //                 el.val(val);
    //         }
    //     });
    //   })
    //
    //   //enable input fields after we fill out the form
    //   $("#studentAddForm :input").prop("disabled", false);
    // })
    //
    // //when the submit button on the form is clicked lets prevent the default behavior
    // //we want to stop the form from submitting and reloading the page
    // $("#submitStudentButton").click(function(e){
    //
    //   //prevents default behavior of form submitting
    //   e.preventDefault()
    //
    //   $.ajax({
    //     url: "http://localhost:1337/student/" + currentStudent,
    //     data: $("#studentAddForm").serialize(),
    //     method: "PUT",
    //     success: function(data){
    //
    //       //reload student table on success
    //       fetchStudents();
    //
    //       //disable form fields again
    //       $("#studentAddForm :input").prop("disabled", true);
    //
    //       //reset form back to empty fields
    //       $("#studentAddForm")[0].reset()
    //
    //     }
    //   })
    // })
    //End of Eric's Code




  })

})()
