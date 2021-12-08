//Easy
function palindrome(number){
    let numberString = number.toString();
    let reverseNumber = numberString.split('').reverse().join('');
    return (numberString == reverseNumber);
}

palindrome(1221);

//Intermidiate
function threeSum(nums){

}