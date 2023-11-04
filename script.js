function calculateGrade() {
    const score = parseFloat(document.forms.gradeForm.score.value);
    let grade;
    
       if (score >= 90) {
        grade = 'A+';
    }  else if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById("gradeResult").textContent = grade;
}

document.getElementById("calculateBtn").addEventListener("click", calculateGrade);

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    calculateGrade();
});
