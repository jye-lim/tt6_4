from webapp import db 

class User(db.Model): 
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(length=16), nullable=False, unique=True)
    password = db.Column(db.String(length=128), nullable=False)
    name = db.Column(db.String(length=128), nullable=False)

class Wallet(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(length=128))

class Currency(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    wallet_id = db.Column(db.Integer(), db.ForeignKey('wallet.id'), nullable=False)
    currency = db.Column(db.String(length=3), nullable=False)
    amount = db.Column(db.Float(), nullable=False)

class Transaction(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    wallet_id = db.Column(db.Integer(), db.ForeignKey('wallet.id'), nullable=False)
    debit_id = db.Column(db.Integer(), nullable=False)
    debit_currency = db.Column(db.String(length=3), nullable=False)
    debit_amount = db.Column(db.Float(), nullable=False)
    credit_id = db.Column(db.Integer(), nullable=False)
    credit_currency = db.Column(db.String(length=3), nullable=False)
    credit_amount = db.Column(db.Float(), nullable=False)
    description = db.Column(db.String(length=128))
    created_at = db.Column(db.String(length=128))
    created_by = db.Column(db.String(length=128))
    updated_at = db.Column(db.String(length=128))
    updated_by = db.Column(db.String(length=128))
