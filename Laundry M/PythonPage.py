from flask import Flask
from flask import render_template
from flask import request
import time
import sys


app =  Flask(__name__, template_folder = 'templates')

@app.route('/', methods=['POST','GET'])
def Login():
    user_name = request.form.get('user_name')
    return render_template('LogInPage.html', user_name = user_name)

@app.route('/home', methods=['POST','GET'])
def Home():

    date_and_time=time.ctime()

    user_name = request.args.get('user_name')

    if user_name == "Samuel":
        user_name = "Pretty"

    return render_template('HomePage.html',user_name=user_name, date_and_time = date_and_time)
   
if __name__ == '__main__':
    app.run(debug=True)