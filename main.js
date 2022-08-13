student_array=[];
function submit(){
    student1=document.getElementById("student1").value;
    student2=document.getElementById("student2").value;
    student3=document.getElementById("student3").value;
    student4=document.getElementById("student4").value;

    student_array.push(student1);
    student_array.push(student2);
    student_array.push(student3);
    student_array.push(student4);

    console.log(student_array);

    document.getElementById("display_name").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sort(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
}