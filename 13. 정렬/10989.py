import sys

input = sys.stdin.readline
write = sys.stdout.write

N = int(input())
count = [0] * 10001

for _ in range(N):
    count[int(input())] += 1

for i in range(10001):
    for _ in range(count[i]):
        write(f"{i}\n")