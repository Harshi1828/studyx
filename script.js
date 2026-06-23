function searchStudy() {
    let subject = document.getElementById("searchBox").value.toLowerCase();
    let result = document.getElementById("result");

    if(subject === "programming"){
        result.innerHTML = "Programming materials available!";
    }
    else if(subject === "datascience"){
        result.innerHTML = "Data Science materials available!";
    }
    else if(subject === "database"){
        result.innerHTML = "Database materials available!";
    }
    else{
        result.innerHTML = "No materials found. Try Programming, DataScience or Database.";
    }
}
