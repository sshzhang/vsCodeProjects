/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 单调栈
    var nums=[];
    var index=0;
    var maxValue=0;
    heights.push(0);
    for(;index<heights.length;index++){
       if(nums.length==0||heights[index]>=nums[nums.length-1]){
         nums.push(heights[index]);        
       }else{
           let count=1;
           while(heights[index]<nums[nums.length-1]){
               var pop=nums.pop();
               maxValue=maxValue>pop*count?maxValue:pop*count;
               count++;
           }
           for(let i=1;i<=count;i++){
               nums.push(heights[index]);
           }
       }
    }
    return maxValue;
 };

 var maximalRectangle = function(matrix) {
    var row=matrix.length;
    if(row==0) return 0;
    var col=matrix[0].length;
    var dp=new Array(row);
    for(var i=0;i<row;i++){
        dp[i]=new Array(col);
        for(var j=0;j<col;j++){
            dp[i][j]=parseInt(matrix[i][j]);
            dp[i][j]=((i==0||dp[i][j]==0)?dp[i][j]:dp[i-1][j]+dp[i][j]);
        }
    }

  var result=0;
   for(let index=0;index<row;index++){
       var tempt=largestRectangleArea(dp[index])
       result=result>tempt?result:tempt;
   }
   return  result;
};


console.log('**********************')
var datas=[["0","1"],["1","0"]]
console.log(maximalRectangle(datas))