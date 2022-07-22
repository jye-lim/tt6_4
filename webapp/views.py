from flask import render_template, redirect, url_for, flash, request 
from flask_login import login_user, logout_user, login_required, current_user

from webapp import app, db 
from webapp.models import User
from webapp.forms import RegisterForm, LoginForm 

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html')


@app.route('/register', methods=['GET', 'POST'])
def register_page():
    form = RegisterForm()
    if form.validate_on_submit(): 
        user_to_create = User(
            username=form.username.data, 
            email_address=form.email_address.data,
            password=form.password1.data
        )
        db.session.add(user_to_create)
        db.session.commit()
        login_user(user_to_create)
        flash(f'Account created successfully! You are now logged in as {user_to_create.username}', category='success')
        return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login_page():
    return render_template('login.html')


@app.route('/logout')
def logout_page():
    flash("You have been logged out!", category='info')
    return redirect(url_for("home_page"))