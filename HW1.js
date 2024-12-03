'number' + 3 + 3; // Результат операції - number33. В результаті конкатенації (об"єднання) так як в нас є операнд у вигляді рядка та інший аперанд - число.

null + 3; // Результат операції - 3. Null явлґє собою, як "нічого", а 3 - це число. Так, як використовується оператор +, то обидва операнди  JS намагається перетворити їх у числа. Null = 0. В результаті маємо 0 + 3 = 3

5 && "qwerty"; // Результат операції - "qwerty". Число 5 є істенне, тому оператор переходить далі, до наступного операнда, який являться не порожнім рядком і теж істенним, тому виводиться останній операнд.

+'40' + +'2' + "hillel"; // Результат операції - "42hillel". унарний плюс намагається перетворити значення в число - в результаті ми маєм число 40 + 2 = 42. Так, як в нас є оперенда у вигляді рядка, відбувається конкатенація.

'10' - 5 === 6; // Результат операції - false. "10" перетворюється в число 10 - 5 = 5. === - порівнює числа 5 і 6 не рівні, тому результат  false.

true + false; // Результат операції - 1. true\false - це логічні значення, які перетворюються в числа 1 + 0 = 1

'4px' - 3; // Результат операції - NaN. При обчисленні JS намагається перетворити операнди на число. В одному з оперенд є букви '4px', що неможливо перетворити на число в результаті віднімання NaN - 3 дає завжди NaN.

'4' - 3; // Результат операції - 1. При обчисленні JS намагається перетворити операнди на число, тому виходить 4 - 3 = 1.

'6' + 3 ** 0; // Результат операції '61'. Оператор ** — це піднесення до степеня. 3 в степені 0 = 1. Далі в нас йде додавання з різними операндами рядок '6' та  число, щов результаті конкатенації об"єднуються.

12 / '6'; // Результат операції 2. При діленні JS намагається перетворити рядок на число, що в результати виходить 12 / 6 = 2.

'10' + (5 === 6); // Результат операції '10false'. При перевірці строгої рівності в нас виходить false,  адже 5!=6. Далі в нас йде додавання у вигляді конкатинації рядків.

null == ''; // Результат операції false. Значення null і порожній рядок '' є різними типами. При порівнянні  цих двох типів визначаєм їх, як не  рівні.

3 ** (9 / 3); // Результат операції 27. Спочатку відбувається дія в дужках, що дає в результаті 3. Далі підносимо 3 до 3 степеня.

!!'false' == !!'true'; // Результат операції true. Оператор !! використовується для приведення значення до булевого типу. Тому ми маєм два булеві вирази 'false' == 'true'. Так як це рядки і вони не пусті, оцінюєм їх як true. Порівняємо 2 значення true == true, що дає true. 

0 || '0' && 1; // Результат операції 1. Спершу виконуєм '0' && 1. '0' — це непорожній рядок, що є truthy. 1 — це число, яке також є truthy. Тому виводимо останній операнд - 1. Тепер вираз виглядає як 0 || 1. 0 є falsy, а 1 є truthy. Оператор || повертає перший truthy операнд. Тому результатом буде 1.

(+null == false) < 1; // Результат операції false. Оператор + приводить null до числа, що буде дорівнювати 0. Далі робимо порівняння 0 == false, де false приводиться до 0. 0 == 0 дає true. Тож true < 1, де true = 1. Вираз 1 < 1 дає false.

false && true || true; // Результат операції true. Оператор && повертає перший falsy операнд у першій частині (false && true), тож в нас виходить false || true. Оператор || повертає перший truthy операнд або останній, якщо обидва falsy. У цьому випадку false || true повертає true, оскільки другий операнд — true.

false && (false || true); // Результат операції false. Спочатку обчислюється вираз у дужках: (false || true). У цьому випадку false || true повертає true, оскільки другий операнд — true. Далі переходим до 2гої частини - false && true. У цьому випадку false && true повертає false, оскільки перший операнд — false.

(+null == false) < 1 ** 5; // Результат операції true.  + перетворює null у число - 0. Робимо перше обчислення в дужках де 0 == 0 бо false у числовому вигляді — це 0. Тому 0 == 0 → true. Далі обчислюєм 1 в 5 ступені, що = 1. В результаті порівнюєм (true) < 1. Де true  = 1. 1 < 1 → false.