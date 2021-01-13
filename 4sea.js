var x;
function n() {
  document.body.style.backgroundColor = "black";
  document.body.style.color ="#FFFFFF";
  sessionStorage.x = 1;
  return x;
}
           function s() {
  document.body.style.backgroundColor = "#F1EDE1";
  document.body.style.color ="#704214";
  sessionStorage.x = 2;
  return x;
}
  function d() {
  document.body.style.backgroundColor = "white";
  document.body.style.color ="#000000";
  sessionStorage.x = 3;
  return x;
}
function mode()
{
if(sessionStorage.x==1)
{
    n();
}
if(sessionStorage.x==2)
{
    s();
}
if(sessionStorage.x==3)
{
    d();
}
if(sessionStorage.x==0)
{
    n();
}
}