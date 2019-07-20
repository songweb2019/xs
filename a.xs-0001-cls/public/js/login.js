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
   
   //login
   //点按钮显示alert
   $("#logbox").click(function(e){
     e.stopPropagation();
     $("#log .alert").addClass("in")
   })
   $(".close").click(function(){
     $(this).parent().removeClass("in")
   })
  //点其他地方，关闭alert
	// $(window).click(function(){
  //   $(".alert").removeClass("in")
  // })

  //logh2
  //点击手机验证码显示手机号登录
  $("#logh2p").click(function(){
    $(".phonelog").css("display","block")
    $(".numberlog").css("display","none")
  })

  //点击账号密码显示账号密码登录
  $("#logh2n").click(function(){
    $(".phonelog").css("display","none")
    $(".numberlog").css("display","block")
  })


  /*  //regis
  //1.查找触发事件的元素
  //选择input中type=checkbox的元素
  $("#agrinput:checkbox")
  //2.绑定事件处理函数
  .click(function(){
  //获得当前checkbox的checked状态值
  var checked=$(this).prop("checked")
                     // .checked
  //3. 查找要修改的元素
  //找除type=checkbox之外的所有表单元素
  $(":input:not(:checkbox)")
  //4.修改元素
  .prop("disabled",!checked);
	//当前checkbox选中，则其他元素启用
	//   checked=true   disabled=false
	//当前checkbox未选中，则其他元素禁用
	//   checked=false  disablel=true   
  })  */
  //myzhqqzc 没有账号，前去注册
  $("#myzhqqzc").click(function(){
    $("#reg").css("display","block")
    $(".close").parent().removeClass("in")
  }) 
  $("#offreg").click(function(){
    $("#reg").css("display","block")
  })

  
})