import './style.scss';

function calc(num1: number): number {
  return num1++;
}

const obj = {
  one: {
    two: {
      three: 'test',
      four: 'four'
    }
  }
};

console.log(calc(8));
console.log(calc(8));
