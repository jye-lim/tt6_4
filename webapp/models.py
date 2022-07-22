from webapp import db 


class User(db.Model):
    __tablename__ = 'users'
    obj_id = db.Column('id', db.Integer(), primary_key=True)
    username = db.Column(db.String(length=20), nullable=False, unique=True)
    password = db.Column(db.String(length=255), nullable=False)
    name = db.Column(db.String(length=255), nullable=False)

    def __str__(self):
        return f'id: {self.obj_id}\n' \
               f'username: {self.username}\n' \
               f'password: {self.password}\n' \
               f'name: {self.name}'

    def __repr__(self):
        return self.__str__()


class Wallet(db.Model):
    __tablename__ = 'wallets'
    obj_id = db.Column('id', db.Integer(), primary_key=True)
    user_id = db.Column('userId', db.Integer(), db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(length=255))

    def __str__(self):
        return f'id: {self.obj_id}\n' \
               f'user_id: {self.user_id}\n' \
               f'name: {self.name}'

    def __repr__(self):
        return self.__str__()


class Currency(db.Model):
    __tablename__ = 'currencys'
    obj_id = db.Column('id', db.Integer(), primary_key=True)
    wallet_id = db.Column('walletId', db.Integer(), db.ForeignKey('wallet.id'), nullable=False)
    currency = db.Column(db.String(length=3), nullable=False)
    amount = db.Column(db.Float(), nullable=False)

    def __str__(self):
        return f'id: {self.obj_id}\n' \
               f'wallet_id: {self.wallet_id}\n' \
               f'currency: {self.currency}\n' \
               f'amount: {self.amount}'
    
    def __repr__(self):
        return self.__str__()


class Transaction(db.Model):
    __tablename__ = 'transactions'
    obj_id = db.Column('id', db.Integer(), primary_key=True)
    wallet_id = db.Column('walletId', db.Integer(), db.ForeignKey('wallet.id'), nullable=False)
    debit_id = db.Column('debitId', db.Integer(), nullable=False)
    debit_currency = db.Column('debitCurrency', db.String(length=3), nullable=False)
    debit_amount = db.Column('debit_amount', db.Float(), nullable=False)
    credit_id = db.Column('creditId', db.Integer(), nullable=False)
    credit_currency = db.Column('creditCurrency', db.String(length=3), nullable=False)
    credit_amount = db.Column('creditAmount', db.Float(), nullable=False)
    description = db.Column(db.String(length=255))
    created_at = db.Column('createdAt', db.String(length=128))
    created_by = db.Column('createdBy', db.String(length=255))
    updated_at = db.Column('updatedAt', db.String(length=255))
    updated_by = db.Column('updatedBy', db.String(length=255))

    def __str__(self):
        return f'id: {self.obj_id}\n' \
               f'wallet_id: {self.wallet_id}'
    
    def __repr__(self):
        return self.__str__()


class ExchangeRate(db.Model):
    __tablename__ = 'exchangeRates'
    obj_id = db.Column('id', db.Integer(), primary_key=True)
    base_currency = db.column('baseCurrency', db.String(length=3))
    exchange_currency = db.Column('exchangeCurrency', db.String(length=3), nullable=False)
    rate = db.Column(db.Float(), nullable=False)

    def __str__(self):
        return f'id: {self.obj_id}\n' \
               f'base_currency: {self.base_currency}' \
               f'exchange_currency: {self.exchange_currency}' \
               f'rate: {self.rate}'
