from flask import render_template, redirect, url_for, flash 
from webapp import app 

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html')

@app.route('/register', methods=['GET', 'POST'])
def register_page():
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    return render_template('login.html')

@app.route('/logout')
def logout_page():
    flash("You have been logged out!", category='info')
    return redirect(url_for("home_page"))