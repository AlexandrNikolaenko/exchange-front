const infoListSub = document.querySelectorAll('.info-list-sub');
const infoListItem = document.querySelectorAll('.info-list-item');
const listArrow = document.querySelectorAll('.list-arrow');
const infoHeader = document.querySelectorAll('.list-header');

function showHideList(cont, cur, index) {
    let scl;
    if(cur > 0) {
        scl = 1;
        cont.classList.remove('hide');
        infoHeader[index].classList.add('active');
        infoListItem[index].style.background = '#F5F5F5';
        infoListItem[index].style.border = '1px solid #E3E4E5';
    } else {
        scl = 0;
        cont.classList.add('hide');
        infoHeader[index].classList.remove('active');
        infoListItem[index].style.background = '#FAF9FF';
        infoListItem[index].style.border = 'none';
    }
    
    cont.querySelectorAll('li').forEach((el, index) => {
        el.style.transform = `translateY(${cur * (index + 1)  * el.offsetHeight * 1}px)`;
        el.style.opacity = scl;
        
    })
    

}
listArrow.forEach((el, index) => el.addEventListener('click', function() {
    infoHeader[index].classList.contains('active') ? showHideList(infoListSub[index], -1, index)
  : showHideList(infoListSub[index], 0.0001, index);  
}))

infoListItem.forEach((el, index) => {
    showHideList(infoListSub[index], -1, index);
});
