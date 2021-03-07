//값 더하기
 var value = 1 + 2 + 4;
 log(value);
 /** 결과
 * 7
 */

//값 연결
var two = "2";
var value = 1 + two;
log(value);
log(typeof value);
/** 결과 
 * 12
 * string
 */

// 왼쪽에서 오른쪽으로 
 var value = 1 + 5 "ABC";
 log(value);
 /**결과
  * 6ABC
  */

// undefined 더하기
 var value;
 log(10 + value);
/** 결과
  * NaN
  */

// 1 또는 0으로 변환
  log(10 + null);
  log(10 + true);
  log(10 + false);
  /**결과
   * 10
   * 11
   * 10
   */

// 숫자를 문자열로 작성
log(10 + "123");
log(123 - "23");
/** 결과
 * 10123
 * 100
 */
