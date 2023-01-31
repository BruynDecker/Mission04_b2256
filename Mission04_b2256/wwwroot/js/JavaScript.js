$("#btnSend").click(function ()  {
    var assignments = parseFloat($("#textAsn").val()) * 0.5;
    var groupProject = parseFloat($("#gp").val()) * 0.1;
    var quizzes = parseFloat($("#quizzes").val()) * 0.1;
    var midtermExam = parseFloat($("#mExam").val()) * 0.1;
    var finalExam = parseFloat($("#fExam").val()) * 0.1;
    var intex = parseFloat($("#intex").val()) * 0.1;
    var finalGrade = assignments + groupProject + quizzes + midtermExam + finalExam + intex;
    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E";
    }

    $("textarea").val("Your final grade is: " + letterGrade);
})