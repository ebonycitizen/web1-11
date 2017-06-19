var number = Math.floor(Math.random()*3);
var answer;

answer = parseInt(window.prompt('―数当てゲーム― 0~2の数字を入力してください'));

var message;
while(answer != number)
{
  answer = parseInt(window.prompt('―数当てゲーム― 0~2の数字を入力してください'));
  if(answer === number)
  {
    message = 'あたり';
    break;
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
    message = '正しい数字を入力してください';
  }

  document.getElementById('choice').textContent = message;
}
