/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 * 
 * dp[i] 表示从第i填开始的最优费用,  从后面往前开始dp
 * 
 *    当第i填不需要旅行时，dp[i]=dp[i+1];
 *    第i填需要旅行时, 
 *      // 只买第i天的票,  买七天的票,  买三十天的票
 *     dp[i]=Min(dp[i+1]+consts[0],  dp[i+7]+consts[1], dp[i+30]+consts[2])
 *                          
 * 就是把数据
 */
var mincostTickets = function(days, costs) {
   
    var len=days.length;
    var minValue=days[0];
    var maxValue=days[len-1];
    var dp=new Array(maxValue+31).fill(0);
     for(let i=maxValue,index=len-1;i>=minValue;i--){
     if(i==days[index]){
       dp[i]=Math.min(dp[i+1]+costs[0], dp[i+7]+costs[1], dp[i+30]+costs[2]);
       index--;
      }else{
         dp[i]=dp[i+1];
       }

    }

return dp[minValue];
};