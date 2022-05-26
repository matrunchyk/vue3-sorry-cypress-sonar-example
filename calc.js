// Ref: https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md
// Usage
// 0. Move this file inside /src (so it won't be omitted by nyc)
// 1. npm run nyc:instrument
// 2. Evaluate instrumented code (./out/src/calc.js) in a browser
// 3. Copy window.__coverage__ contents as JSON and save as .nyc_output/out.json
// 4. npm run nyc:report
// 5. See coverage report in a browser

function add(one, two) {
  return one + two;
}

function sub(one, two) {
  // istanbul ignore next
  return one - two;
}

// istanbul ignore next
function mul(one, two) {
  return one * two;
}

function div(one, two) {
  return one / two;
}

// Simulating tests
const a = 3;
const b = 4;
const result1 = add(a, b);
const result2 = sub(a, b);
const result3 = mul(a, b);

// istanbul ignore if
{
  console.log('ABC');
}

console.log(result1);
console.log(result2);
console.log(result3);
