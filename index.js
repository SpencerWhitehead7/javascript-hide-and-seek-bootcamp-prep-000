function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list')
  for(var i=0; i<rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i])+n
  }
}

function deepestChild(){
  var list = document.querySelector('#grand-node')
      return list[(list.length-1)]
      
      
      
function deepestChild3(){
  var item = document.querySelector("#grand-node")
  var list = document.querySelectorAll('#grand-node div')
  for(var i=0; i<list.length; i++){
    item = item.querySelector('div')
    if(){
      return item
    }
  }
}