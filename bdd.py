import sqlite3
import hashlib

def create_table():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT UNIQUE,
        password_hash TEXT
    )''')
    conn.commit()
    conn.close()

def add_user(username, password):
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    try:
        c.execute('INSERT INTO users (username, password_hash) VALUES (?, ?)', (username, password_hash))
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False  # username exists
    finally:
        conn.close()

def check_user(username, password):
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE username = ? AND password_hash = ?', (username, password_hash))
    user = c.fetchone()
    conn.close()
    return user is not None