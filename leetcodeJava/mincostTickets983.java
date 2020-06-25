
package leetcodeJava;

public class mincostTickets983 {

    public int maximalSquare(char[][] matrix) {
        int len = matrix.length;
        if (len == 0)
            return 0;
        int cLen = matrix[0].length;
        int dp[][] = new int[len][cLen];
        int maxSum = 1;
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < cLen; j++) {
                if (matrix[i][j] == '1') {
                    maxSum = maxSum == 0 ? 1 : maxSum;
                    dp[i][j] = 1;
                    if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] == '1') {

                        dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
                        maxSum = maxSum > dp[i][j] * dp[i][j] ? maxSum : dp[i][j] * dp[i][j];
                    }
                } else {
                    dp[i][j] = 0;
                }
            }
        }
        return maxSum;
    }

    public static void main(String[] args) {

        // mincostTickets983 sh=new mincostTickets983();
        // System.out.println("test");

        double x = 1.5;
        double y = 2.0;
        double z=1.5;
        System.out.println(++z);
        double min = Math.min(y, ++x);
        System.out.println(min);
    }

}
