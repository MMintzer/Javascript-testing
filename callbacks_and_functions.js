//Simple timeout function.  After 5 seconds, alerts 'HAMMER TIME'

window.setTimeout(function(){
  alert('HAMMER TIME');
}, 5000);


//timeout function with a closure.
function hammerTime(time) {
  window.setTimeout(function() {
    alert(`IT IS ${time} HAMMER TIME`);
  },time);
}
