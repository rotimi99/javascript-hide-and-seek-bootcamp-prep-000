function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankList = document.querySelectorAll('.ranked-list')

  for (let i = 0; l = rankList.length; i < l; i++) {
    let children = rankedLists[i].children
    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
   }
  }
}

//const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

/* for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (i + 1).toString() */
  function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]

    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }

    return node
  }
