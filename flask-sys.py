from flask import Flask, render_template, request, jsonify
import bdd

app = Flask(__name__)
-
bdd.create_table()

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/connect/<int:connect_id>')
def connect(connect_id):
    return render_template("main.html", connect_id=connect_id)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'success': False, 'message': 'Données manquantes'})
    if bdd.add_user(username, password):
        return jsonify({'success': True})
    else:
        return jsonify({'success': False, 'message': 'Nom d\'utilisateur existe déjà'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if bdd.check_user(username, password):
        return jsonify({'success': True, 'username': username})
    else:
        return jsonify({'success': False, 'message': 'Identifiants invalides'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

