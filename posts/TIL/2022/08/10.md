---
title: "2022-08-10 TIL"
date: "2022-08-10 20:40"
---

# solved leetcode Zigzag Conversion
[Ziazag Conversion](https://leetcode.com/problems/zigzag-conversion/)

위 문제를 해결하기 위해 두가지 방안을 고려했다.

1. 배열형태로 만들어 문자열들을 append 한 후, 배열을 결과 문자열로 합치하여 반환한다.
2. 문자열이 배치되는 알고리즘을 찾아 결과 문자열을 만들어 반환한다.

2번이 재밌어보여 처음으로 시도해봤으니 numRows * s.length 의 2중 반복문으로 수행되어 처리 속도가 느리다는걸 알게 되었다.

1번으로도 다시 풀어보니 2번보다 약 6배 수행속도가 빨랐다.(1번은 s.length + numRows * 2 의 수행시간을 보인다.)