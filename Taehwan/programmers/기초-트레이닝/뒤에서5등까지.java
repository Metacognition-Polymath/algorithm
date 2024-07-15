/*
 * 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

import java.util.Arrays;

public class 뒤에서5등까지 {
  public int[] solution(int[] num_list) {
    int len = Math.min(5, num_list.length);
    int[] answer = new int[len];
    
    Arrays.sort(num_list);
    for (int i = 0; i < len; i++) {
        answer[i] = num_list[i];
    }
    
    return answer;
  }

  public static void main(String[] args) {
    뒤에서5등까지 solution = new 뒤에서5등까지();
    int[] num_list = {12, 4, 15, 46, 38, 1, 14};
    System.out.println(Arrays.toString(solution.solution(num_list)));
  }
}
