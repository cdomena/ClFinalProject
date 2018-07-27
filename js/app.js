var answers = [
    'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - definitely',
    'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
    'Yes',
	'Signs point to yes',
	'Reply hazy, try again',
	'Better not tell you now',
	'Ask again later',
    'Cannot predict now',
	'Concentrate and ask again',
	'Don\'t count on it',
	'My reply is no',
    'My sources say no',
	'Outlook not so good',
	'Very doubtful'];
// The button is targeted to run a function. In the function a random number is generated between 0 and .99  then multiplied by the number of answers in the array defined above. That number is then rounded down to a wole number and used to define the array index. Now that we got an answer ready the paragraph element is targeted by ID and the contents updated.
document.getElementById('shake').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
document.getElementById('fortune').innerHTML = answer;
};