from flask import Flask, request, jsonify, Response
import flask_cors

import pymysql

# 导入自定义包
import login

app = Flask(__name__)
# 允许跨域
flask_cors.CORS(app)


# 进行数据库连接
def connect_mysql():
    try:
        conn = pymysql.connect(
            host='120.78.224.81',
            user='root',
            password="AX.xgp000908",
            database='share_your_life',
            port=3306,
            charset=''
        )
        print("数据库连接成功")
        return conn
    except Exception as e:
        print('MySQL error:数据库连接失败')
        print(e)
        return None


# 连接数据库
conn = connect_mysql()


# 检查数据库连接状态
def check_connect():
    global conn
    try:
        # 通过ping检查是否保持了连接，没有就重连
        conn.ping()
    except Exception as e:
        print("连接断开，重连中")
        conn = connect_mysql()


# 定义全局变量cursor 用来操作数据库的游标
cursor = conn.cursor()


@app.route('/')
def hello_world():
    return '当你看到这句话的时候，说明该服务已经启动了'


@app.route('/login', methods=['GET', 'POST'])
def login_in():
    """
    :desc:用于根据其登录
    :simple: /login?username=root&password=123&current_time=2020/7/26 下午10:39:00
    :return:
    {
        code:200,
        data:{
        message:'注册成功'||'登录成功'||'密码错误或用户名已存在'||‘数据库出错’,
        id:123(当前id)
        }
    }
    ||
    {
        code:304,
        data:{
        message:'请检查您的参数',
        id:0
        }
    }
    """
    try:
        # 设置cookies
        Response.set_cookie("current", 'daiosjdaiojdio')
        # 首先拿到重要的参数
        global conn
        username = str(request.args.get('username'))
        password = str(request.args.get('password'))
        current_time = str(request.args.get('current_time'))
        # 调用我们导入的login函数
        print(username, password, current_time)
        res = login.login_register(conn, username, password, current_time)
        return jsonify({
            'code': 200,
            'data': res
        })
    except Exception as e:
        print(e)
        return jsonify({
            'code': 304,
            'data': {
                "message": "您的参数有误",
                "id": 0
            }
        })


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=9999
    )
