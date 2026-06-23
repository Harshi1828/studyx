function searchStudy() {
    let subject = document.getElementById("searchBox").value.toLowerCase().trim();
    let result = document.getElementById("result");

    if(subject.includes("programming")){
        result.innerHTML = "Programming materials available!";
    }
    else if(subject.includes("data")){
        result.innerHTML = "Data Science materials available!";
    }
    else if(subject.includes("database")){
        result
