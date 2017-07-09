/* 
* @Author: Marte
* @Date:   2017-07-04 09:52:09
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-04 09:52:14
*/
// 轮播图点击
var box = document.getElementById("carousel-lun");
var ul = box.children[0];
var lists=document.getElementsByClassName('item');//图片个数
var imgWidth =box.width ;
var ol=document.getElementById('ol-li');// 获取ol
// 遍历ol创建li
for(var i=0;i<lists.length;i++){
    var li=document.createElement('li');
    li.innerHTML=i+1;
    ol.appendChild(li);
}
 var lisOl = ol.children;
  ol.children[0].className = "current";
  for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].index = i;
        lisOl[i].onclick = function () {
            if (pic == lists.length - 1) {
                ul.style.left = 0;
            }
            for (var i = 0; i < lisOl.length; i++) {
                lisOl[i].className = "";
            }
            this.className = "current";
            var target = this.index * imgWidth;
            animate(ul, target);
            pic = this.index;
        };
    }
    var pic = 0;
    function animate(tag,target){
        clearInterval(tag.timer);
        tag.timer=setInterval(function(){
            var leader=tag.offsetLeft;
            var step=8;
            step=leader>target?-step:step;
            if(Math.abs(leader-target)<Math.abs(step)){
                tag.style.left=target+'px';
                clearInterval(tag.timer);
            }else{
                leader=leader+step;
                tag.style.left=leader+"px";
            }
        },6)
    }