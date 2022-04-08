function finalGrade(gradeOne, gradeTwo, gradeThree){
  /// This calculates average rade using the parameters
  const average = (gradeOne + gradeTwo + gradeThree) / 3;
  ///This defines all the cases of an invalid grade for each parameter
  if (gradeOne < 0 || gradeOne > 100 || gradeTwo < 0 || gradeTwo > 100 || gradeThree < 0 || gradeThree > 100) {
    return 'You have entered an invalid grade.';
  }
  /// This return a corresponding letter grade to the average of the three number grade parameters
  if (average < 60){
    return 'F'
  } else if (average < 70) {
    return 'D'
  } else if (average < 80) {
    return 'C'
  } else if (average < 90) {
    return 'B'
  } else if (average <= 100) {
    return 'A'
  }
}

console.log(finalGrade(99, 85, 95));
///outputs A
