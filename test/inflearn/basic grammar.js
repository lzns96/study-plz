log(1);
log(1.);
log(1.0);
log(1.00001);

// 숫자처리
log(.123);
log(0.12+5);
/** JS는 정수와 실수를 구분하지 않고 실수로 계산한다.
 .123처럼 소수 점 앞에 값을 작성하지 않아도 0을 붙여 0.123으로 사용한다. 
 부동 소수점 처리!  */


 //상수
 var ONE = 123;
 ONE = 456;
 log(ONE);
 log(Number.MAX_VALUE);
 /** ONE을 대문자로 한 이유는.. ! 변수 바꾸지 말라고 나타낸 것 */

 //데이터 타입
 var point = 123 ; 
 log (typeof point);

 var book = "책";
 log(typeof book);

 // Objetc 타입
 var book = {
     title: "책", point: 123
 };
 log(book);