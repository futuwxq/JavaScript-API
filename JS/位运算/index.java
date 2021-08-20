import java.util.Scanner;

public class Main {
  public static int ans;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] t = sc.nextLine().split(" ");
        System.out.println(new Solution().helper(t[0],Integer.valueOf(t[1])));
    }
    public int helper(String s, int k ){
      int len = s.length();
      int newLen = len - k;
      ans = Integer.MAX_VALUE;
      char[] c = s.toCharArray();
      for(int i = 0;i <= c.length - newLen;i++){
        permutation(c, i ,newLen, new StringBuffer());
      }
      return ans;
    }
    public void permutation(char[] c,int begin,int len, StringBuffer sb){
       if(len == sb.length()){
          ans = Math.min(ans, compressString(sb.toString()));
          return;
       }
       if(begin == c.length) return;
     
       sb.append(c[begin]);
       permutation(c, begin  + 1,len,sb);
       sb.deleteCharAt(sb.length() -1);
       permutation(c, begin + 1,len,sb);

    }

    public static int compressString(String S){
        int orionalLen = S.length();
        if(orionalLen == 0) return 0;
        StringBuilder newString = new StringBuilder();
        char temp = S.charAt(0);
        Integer count = 0;
        newString.append(S.charAt(0));
        for(int i = 0;i < orionalLen.length;i++){
          if(S.charAt(i) == temp){
            count++;
          }
          else {
            newString.append(Integer.toString(count));
            newString.append(S.charAt(i));
            temp = S.charAt(i);
            count = 1;
          }
        }
        newString.append(Integer.toString(count));
        return newString.length() >= orionalLen ? orionalLen :newString.length();
     
    }
}


import java.util.Scanner;
import java.util.Map;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] arr;
        arr = sc.nextLine().split(" ");
        int m = Integer.parseInt(arr[0]);
        int n = Integer.parseInt(arr[1]);
        Map<String, int[]> hashmap = new HashMap<>();
       
        for(int i = 0; i < m; i++){
            String[] has;
            has =  sc.nextLine().split(" ");
            int[] num = new int[2];
            num[0] = Integer.parseInt(has[1]);
            num[1] = Integer.parseInt(has[2]);
            hashmap.put(has[0], num);
        } 
        int sum = 0;
        for(int i = 0;i < n;i++){
          String[] need;
          need =  sc.nextLine().split(" ");
            int num = Integer.parseInt(need[1]);
            int[] temp = new int[2];
            temp = hashmap.get(need[0]);
            if(temp[1] >= num){
              sum += num*temp[0];
              temp[1] = temp[1] - num;
              hashmap.put(need[0], temp);
              
            }else {
              System.out.println(-(i + 1));
              return;
            }
        }
        System.out.println(sum);
    }
}