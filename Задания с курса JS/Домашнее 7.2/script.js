var a=document.documentElement;
var b= document.documentElement.children[0];
var c= document.documentElement.children[1];

poisk();
function poisk(){
for (var i = 0; i < a.children.length; i++) {
    console.log(a.children[i]);
  console.log(a.children.length);
   }
for (var i = 0; i < b.children.length; i++) {
   console.log(b.children[i] );
   console.log(b.children.length);
  
  }
for (var i = 0; i < c.children.length; i++) {
   console.log(c.children[i] );
  console.log(c.childElementCount);
  
 }

}