'''
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return하는 solution을 완성해주세요.
'''
def solution(arr):
  answer = []
  for num in arr:
    if num >= 50 & num % 2 == 0:
      answer.insert(num / 2)
    elif num < 50 & num % 2 == 1:
      answer.insert(num * 2)
  return answer
