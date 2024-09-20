var MinStack = function () {
  this.stack = [];

  this.push = (val) => {
    if (!this.stack.length) {
      this.stack.push({
        val,
        min: val,
      });
    } else {
      let min = this.stack[this.stack.length - 1].min;

      if (min > val) {
        min = val;
      }

      this.stack.push({
        val,
        min,
      });
    }
  };

  this.top = () => {
    return this.stack[this.stack.length - 1].val;
  };

  this.pop = () => {
    return this.stack.pop().val;
  };

  this.getMin = () => {
    return this.stack[this.stack.length - 1].min;
  };
};

//  -2
//   0
//  -3
//  -1

const stack = new MinStack();

stack.push(-2);
stack.push(0);
stack.push(-3);
stack.push(-1);

console.log(stack.stack);
