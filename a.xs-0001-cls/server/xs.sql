SET NAMES UTF8;
DROP DATABASE IF EXISTS xs;
CREATE DATABASE xs CHARSET=UTF8;
USE xs;

/** 用户信息 **/
CREATE TABLE xs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),        #账号
  upwd VARCHAR(32),         #密码
  email VARCHAR(64),        #邮箱
  adress VARCHAR(128),      #地址
  phone VARCHAR(16),        #手机号
  user_name VARCHAR(32),    #用户真实姓名
  gender INT,               #性别  0-女  1-男
  uvip INT                  #会员  0-不是 1-是
);
/** 插入用户信息 **/
INSERT INTO xs_user VALUES
(NULL,'喜上',md5('123456'),'1215037123@qq.com','河南省郑州市','18790687256','喜上',1,1),
(NULL,'眉梢',md5('123456'),'','河南省郑州市','18790687256','眉梢',0,0);


/** 头像路径 **/
CREATE TABLE xs_pic_userhead(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  lg VARCHAR(128),      #大头像图片路径 
  md VARCHAR(128),      #中头像图片路径 
  sm VARCHAR(128)       #小头像图片路径 
);
/** 插入头像路径 **/
INSERT INTO xs_pic_userhead VALUES
(NULL,'public/avatar/lg/userhead1.jpg','public/avatar/md/userhead1.jpg','public/avatar/sm/userhead1.jpg'),
(NULL,'public/avatar/lg/userhead2.jpg','public/avatar/md/userhead2.jpg','public/avatar/sm/userhead2.jpg');