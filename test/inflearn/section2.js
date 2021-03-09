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
 var value = 1 + 5 + "ABC" ;
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

// 숫자 값으로 변환
log(10 * "20");
log(10 * true);
log(10 * false);
log(10 * null);
log(10 * "A");
/** 결과
 * 200
 * 10
 * 0
 * 0
 * NaN
 */
// IEEE 754 유동 소수점
log( 2.3 * 3);
log(2.3 * 10 * 3/10);
/**결과
 * 6.89999999999999995
 * 6.9
 */
// 나머지 구하기
 log(5 % 2.5);
 log(5 % 2.3);
 log((5 * 10 - (2 * 2.3 * 10)) / 10) ;
 /** 결과
  * 0
  * 0.400000000000000000036
  * 0.4
  */