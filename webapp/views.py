from flask import render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, login_required, current_user

from webapp import app, db 
from webapp.models import User, Wallet, Currency, Transaction, ExchangeRate
from webapp.forms import RegisterForm, LoginForm

@app.route('/')
@app.route('/home')
def home_page():
    users = User.query.all()
    print('USER:')
    for user in users:
        print(user)

    wallets = Wallet.query.all()
    print('WALLET:')
    for wallet in wallets:
        print(wallet)

    currencies = Currency.query.all()
    print('CURRENCY:')
    for currency in currencies:
        print(currency)

    transactions = Transaction.query.all()
    print('TRANSACTION:')
    for transaction in transactions:
        print(transaction)

    exchange_rates = ExchangeRate.query.all()
    print('EXCHANGE RATE:')
    for e in exchange_rates:
        print(e)

    return redirect('http://localhost:5000/login')


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
        return redirect('http://localhost:5000/login')

    if form.errors != {}: 
        for err_msg in form.errors.values(): 
            flash(f'The following error has occured when creating user: {err_msg}', category='danger')

    return redirect('http://localhost:5000/register')


@app.route('/login', methods=['GET', 'POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(attempted_password=form.password.data):
            login_user(attempted_user)
            flash(f'Success! You are logged in as: {attempted_user.username}', category='success')
            return form.id 
        else: 
            flash('Username and password do not match! Please try again.', category='danger')

    return False 


@app.route('/logout')
def logout_page():
    logout_user()
    flash("You have been logged out!", category='info')
    return redirect("http://localhost:5000/login")


@app.route('/wallets')
def wallets():
    user = User.query.filter_by(obj_id=1)
    print(user[0])
    user_wallets = Wallet.query.filter_by(user_id=user[0].obj_id)
    return redirect('http://localhost:5000/dashboard')


@app.route('/wallets/<wallet_id>')
def view_transactions(wallet_id):
    wallet = Wallet.query.filter_by(obj_id=wallet_id).first()
    transactions = Transaction.query.filter_by(wallet_id=wallet_id)
    transactions = [t for t in transactions]
    return redirect('http://localhost:5000/transactions')
