//当窗口的内容都加载完成之后才查找按钮绑定事件
//$(window).load(function(){...})
//$(window).on("load",function(){ ... }) == $(window).load(function(){...})
// $(document).ready(function(){ ... })  == $(function(){ ... })
$(function(){
  //DOM四步
   //1.查找触发事件的元素  
   //2.绑定事件处理函数
   //3.查找要修改的元素    
   //4.修改元素
   
  //1.设置
  //因为无论进入按钮，还是进入ul，都要保证ul显示
  //因为无论从按钮出，还是从ul出，都要关闭ul
  //又因为按钮和ul都是包含在一个div内的
  //所以，应该把鼠标进入和移出事件绑定在共同的父元素div上   
                                //当鼠标进入div时
   $("div.loginchange").mouseover(function(e){
      e.stopPropagation(); //停止事件传播 e = event
      e.preventDefault(); //阻止#号
      $(".changeImg-menu").css("height",140)
   }).mouseout(function(){ //当鼠标移出div时
      $(".changeImg-menu").css("height",0)
   })







   
})