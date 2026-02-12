from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/course/<int:course_id>')
def course(course_id):
    # Tu peux personnaliser chaque page de cours
    return render_template(f'page{course_id}.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
