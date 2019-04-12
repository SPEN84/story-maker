//"<h2>There once was a  [adj] programmer who wanted to use Javascript to  [v] the  [n].</h2>"
var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adj = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var v = prompt('Please type a verb');
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var n = prompt('Please type a noun');
alert('All done. Ready for the message?');
var sent = "<h2>There once was a  " + " " + adj;
sent += ' programmer who wanted to use JavaScript to  ' + " " + v;
sent += ' the ' + n + '.</h2>';
document.write(sent);
// parseInt turns strings into numbers