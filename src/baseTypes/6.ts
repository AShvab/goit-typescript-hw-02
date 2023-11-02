/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// приймає один параметр — message типу string і нічого не повертає, тому тип, що повертається — void:
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Never - коли функція ніколи не закінчується або нічого не повертає
function customError(): never {
  throw new Error("Error");
}

export {};
