function lowest(nums){
    let i = 0;
    let min_one = nums[0];
    let min_two = nums[1];
    let minIndex = 0;
    while(i < nums.length){
        if(min_one > nums[i]){
            min_one = nums[i];
        }
        if(min_two > nums[i] && min_two > min_one){
            min_two = nums[i];
        }
        i++;
    }


    console.log(min_one);
    console.log(min_two);


}

lowest([23,45,12,76,21]);