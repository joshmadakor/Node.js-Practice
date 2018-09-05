var sum = 0;
var count = 2;

while (count < process.argv.length)
{
  sum += Number(process.argv[count]);
  count++;
}

console.log(sum);
