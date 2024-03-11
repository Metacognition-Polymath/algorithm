'''
정수 리스트 num_list 가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return 하는 함수를 작성하세요.
음수가 없다면 -1을 return 하면 됩니다.
'''
def solution(num_list):
    for i in range(len(num_list)):
        if num_list[i] < 0:
            return i
    return -1