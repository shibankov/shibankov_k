function delay(mymessage, ms) {

  return function(){
    var myThis = this;
    var myArgs = arguments;

    setTimeout(function() {
      mymessage.apply(myThis, myArgs);
    }, ms);

  };

}
function mymessage(arg) {
  console.log('Message: ' + arg);
}

var func1, func2;

func1 = delay(mymessage, 5000);
func2 = delay(mymessage, 3000);

func1('Привет');
func2('Пока');
