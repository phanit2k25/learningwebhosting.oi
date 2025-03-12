document.getElementById("bootstrapForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let hireDate = document.getElementById("hireDate").value;

    // Format salary as USD
    let formattedSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salary);
    // Display values in the alert box
    document.getElementById("nameOutput").textContent = name;
    document.getElementById("emailOutput").textContent = email;
    document.getElementById("salaryOutput").textContent = formattedSalary;
    document.getElementById("dateOutput").textContent = hireDate;

    // Show alert
    document.getElementById("alertBox").classList.remove("d-none");

    // show alert 
    alert("1. Employee Name : " + name + "\n"+
          "2. Email : "+ email +"\n"+
          "3. Salary : "+formattedSalary+"\n"+
          "4. Hire Date : "+hireDate
    );
});

function closeAlert() {
    document.getElementById("alertBox").classList.add("d-none");
}

function goBack() {
    window.history.back();
}