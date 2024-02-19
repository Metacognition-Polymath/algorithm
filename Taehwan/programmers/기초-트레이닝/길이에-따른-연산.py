'''
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11이상이면 리스트에 모든 원소의 합을 구하고,
10 이하이면 모든 원소의 곱을 return하는 함수를 작성해주세요.
'''
def solution(num_list):
    if len(num_list) >= 11:
        return sum(num_list)
    else:
        result = 1
        for i in num_list:
            result *= i
        return result
