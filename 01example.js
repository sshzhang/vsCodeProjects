/*var name="zhang";

var info=` 
shz
sz
szaa



`;

console.log(info);

console.log('---------------------')
console.log(info.trim());


let str='(name)=>`Hello ${name}`'
let func=eval(str);
console.log(func('jack'))

var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template){
  var evalExpr = /<%=(.+?)%>/g;
  var expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  console.log('-----------------------------------')
  console.log(template);
  var script =
  `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}

var parse = eval(compile(template));
var sm = parse({ supplies: [ "broom", "mop", "cleaner" ] });
console.log(sm)


var a=5;
var b=10;

tag`Hello ${a+b} world ${a*b}`;
function tag(stringArray, value1, value2){
  console.log(stringArray);
  console.log(value1, value2);
}


var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  var result = '';
  var i = 0;
  console.log(literals)
console.log(arguments)
  while (i < literals.length) {
    result += literals[i++];
    console.log(result)
    if (i < arguments.length) {
      result += arguments[i];
      console.log(result)
    }
  }
  return result;
}


console.log('***************')
var sender='<script>alert("abc")</script>';

var message=SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData){

  console.log(templateData);
  var s=templateData[0] // 字符数组
  for(var i=1;i<arguments.length;i++){
    var arg=String(arguments[i]);
    s+=arg.replace(/&/g,"&amp").replace(/</g,"&lt").replace(/>/g,"&gt");
    s+=templateData[i];
  }
}

*/

// console.log(/^\uD83D/u.test('\uD83D\uDC2A')) // false  u 会把大于FFFF的字符转换为4个字节
// console.log(/^\uD83D/.test('\uD83D\uDC2A')) // true    默认只会把两个字节来表示一个字符，所以返回true
// var s='????'
// console.log(/^.$/.test(s))
// console.log(/^.$/u.test(s))


// new Array().slice();

// Object.is(NaN,NaN)


let sender = '<script>alert("abc")</script>'; // 恶意代码
let sValue='123';

let message =
  SaferHTML`<p>${sender} has sent you ${sValue} a message.</p>`;

function SaferHTML(templateData) {
  let s = templateData[0];
  console.log(arguments);
  
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}