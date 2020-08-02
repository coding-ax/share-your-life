#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2020/7/26 22:27
# @Author  : AX
# @Site    : 
# @File    : __init__.py.py
# @Software: PyCharm


def login_check(username, cursor):
    """
    :param username:str
    :param password:str
    :param cursor:<class> 数据库游标对象
    :return:数据||None
    :description:根据用户名检查当前的账号密码是否是已经存在的，是则返回True，否则返回False
    """
    # 查看是否是已经存在于数据库中的用户
    sql = "select id,username,password from info where username= %s"
    add_data = [username]
    res = cursor.execute(sql, add_data)
    if res == 0:
        return None
    else:
        return cursor.fetchall()


def login_register(conn, username, password, register_time):
    """
    :param register_time:   注册时间
    :param cursor: 数据库游标对象
    :param username:  账号
    :param password:  密码
    :return: {
    message: "注册成功",
    id: 当前id
    }
    ||
    {
    message: "登录成功",
    id: 当前id
    }
    """
    # 拿到游标对象
    cursor = conn.cursor()
    # 查询用户名是否存在
    regist_status = login_check(username, cursor)
    '''                    
                                --> None-->进行注册流程 --> 返回 注册成功
    进行两重验证： regist_status--                      --> 返回 注册失败
                                --> 有值 -->password==查询值-->返回 登陆成功
                                                       否则-->返回 密码错误
                           
    '''
    # 如果不为None 则进行密码的检查
    if regist_status:
        # 如果密码验证成功,说明登录正确
        if password == regist_status[0][2]:
            return {
                "message": "登录成功",
                "id": regist_status[0][0]
            }
        # 否则说明密码错误，禁止登录
        else:
            return {
                "message": "密码错误或用户名已存在",
                "id": regist_status[0][0]
            }
    # 如果regist_status为空，说明可以注册，则直接进行注册
    else:
        try:
            # 执行添加语句

            sql = "insert into info(username,password,register_time) values(%s,%s,%s)"
            # 组成数据
            add_data = [username, password, register_time]
            res = cursor.execute(sql, add_data)
            # 提交
            conn.commit()
            # 再查一次用来获取id
            regist_status = login_check(username, cursor)
            return {
                "message": "注册成功",
                "id": regist_status[0][0]
            }
        except Exception as e:
            return {
                "message": "数据库出错",
                "id": 0
            }
