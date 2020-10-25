document.addEventListener("DOMContentLoaded", function() {
  let menu = document.querySelector("#menu");
  menu.addEventListener("click", function(event) {
    let ctrlKey = event.ctrlKey;
    if (event.target == this) {
        return false;
    }
    else if (ctrlKey) {
      addSelected(event.target);
    }
    else if (!ctrlKey) {
      addSelected(event.target);
    } 
    else {
      clearSelected(this.children);
    }
  });
  menu.addEventListener('mousedown', function (e) {
    e.preventDefault();
  })
  function addSelected(target) {
      target.classList.toggle("selected");
  }  
  function clearSelected(elems) {
    for (let elem of elems) {
        elem.classList.remove('selected');
    }
  }
    class Task {
      constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
      }

      addfirst() {
        let task = document.querySelector(".task").value;
        let li = document.createElement("li");
        li.innerHTML = task;
        menu.prepend(li);
      }
  
      addlast() {
        let task = document.querySelector(".task").value;
        let li = document.createElement("li");
        li.innerHTML = task;
        menu.appendChild(li);
      }
  
      remove() {
      let children = menu.children;
      for (let elem of children) {
        if(elem.className)
        elem.remove();
      }
      }
      sort() {
        let allLi = menu.getElementsByTagName('li');
        let itemsArr = [];
        for (let i = 0; i < allLi.length; i++) {
          if(allLi[i].className) {
            let li = allLi[i].innerHTML;
            itemsArr.push(li);
          }
        };
        itemsArr.sort((a, b) => a - b);
        console.log(itemsArr);
      }
      onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
      };
    }
  
    new Task(task);
  });  