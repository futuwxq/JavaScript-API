package beike;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class t3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] nk;
        nk = scanner.nextLine().split(" ");
        int m  = Integer.parseInt(nk[0]);
        int n  = Integer.parseInt(nk[1]);
        Map<String, int[]> map = new HashMap<>();
        for (int i = 0; i < m; i++) {
            String[] arr;
            arr = scanner.nextLine().split(" ");
            int[] num = new int[2];
            num[0] = Integer.parseInt(arr[1]);
            num[1] = Integer.parseInt(arr[2]);
            map.put(arr[0],num);
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            String[] arr;
            arr = scanner.nextLine().split(" ");
            int num = Integer.parseInt(arr[1]);
            int[] temp = new int[2];
            temp = map.get(arr[0]);
            if(temp[1] >= num) {
                sum = sum + num * temp[0];
                temp[1] = temp[1] - num;
                map.put(arr[0],temp);
            }else {
                System.out.println(-(i+1));
                return;
            }
        }
        System.out.println(sum);
    }
}