var number = Math.floor(Math.random()*100);
var answer;
var message;
var i=0;

do
{
  if(i===0)
  {
    answer = parseInt(window.prompt('―数当てゲーム― 0~2の数字を入力してください'));
    i = 1;
  }
  else
    answer = parseInt(window.prompt(message));
  
  if(answer === number)
  {
    message = 'あたり';
  }
  else if(answer < number)
  {
    message = 'もっと大きいです';
  }
  else if(number < answer)
  {
    message = 'もっと小さいです';
  }
  else
  {
    message = '頑張れ';
    var result = window.confirm('終わり？');
    if(result)
    {
      document.getElementById('choice').textContent = '終わり';
      break;
    }
  }
  document.getElementById('choice').textContent = message;
}
while(answer != number);
