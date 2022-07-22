import sqlalchemy
import psycopg2
import json
import os

path = os.path.dirname(__file__)
folder_name = 'data'
user_path = os.path.join(path, folder_name, 'user.json')
wallet_path = os.path.join(path, folder_name, 'wallet.json')
currency_path = os.path.join(path, folder_name, 'currency.json')
transaction_path = os.path.join(path, folder_name, 'transaction.json')
exchangeRate_path = os.path.join(path, folder_name, 'exchangeRate.json')

user_json = json.load(open(user_path))
wallet_json = json.load(open(wallet_path))
currency_json = json.load(open(currency_path))
transaction_json = json.load(open(transaction_path))
exchangeRate_json = json.load(open(exchangeRate_path))
print(user_json)
print(wallet_json)
print(currency_json)
print(transaction_json)
print(exchangeRate_json)

# Connections
conf_path = '../express_api/config/config.json'
conf = json.load(open(os.path.join(path, conf_path)))
conf = conf['development']

conn = psycopg2.connect(
    host=conf['host'],
    database=conf['database'],
    user=conf['username'],
    password=conf['password'],
)
cur = conn.cursor()

for user in user_json:
    cur.execute(
        'INSERT INTO users (id, username, password, name)'
        'VALUES (%s, %s, %s, %s)',
        (user['id'], user['username'], user['password'], user['name'])
    )

for wallet in wallet_json:
    print(wallet)
    cur.execute(
        'INSERT INTO wallets ("id", "userId", "name")'
        'VALUES (%s, %s, %s)',
        (wallet['id'], wallet['user_id'], wallet['name'])
    )

for currency in currency_json:
    cur.execute(
        'INSERT INTO currencys ("id", "walletId", "currency", "amount")'
        'VALUES (%s, %s, %s, %s)',
        (currency['id'], currency['wallet_id'], currency['currency'], currency['amount'])
    )

for transaction in transaction_json:
    cur.execute(
        'INSERT INTO transactions ("id", "walletId", "debitId", "debitCurrency", "debitAmount", "creditId", "creditCurrency", "creditAmount", "description", "createdAt", "createdBy", "updatedAt", "updatedBy")'
        'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)',
        (transaction['id'], transaction['wallet_id'], transaction['debit_id'], transaction['debit_currency'], transaction['debit_amount'], transaction['credit_id'], transaction['credit_currency'], transaction['credit_amount'], transaction['description'], transaction['created_at'], transaction['created_by'], transaction['updated_at'], transaction['updated_by'],)
    )

for er in exchangeRate_json:
    cur.execute(
        'INSERT INTO "exchangeRates" ("id", "baseCurrency", "exchangeCurrency", "rate")'
        'VALUES (%s, %s, %s, %s)',
        (er['id'], er['base_currency'], er['exchange_currency'], er['rate'])
    )

conn.commit()
cur.close()
conn.close()
