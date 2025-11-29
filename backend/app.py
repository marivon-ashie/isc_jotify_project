
from flask import Flask, request, jsonify
from models import db,Note
from flask_migrate import Migrate
from config import Config


app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)


from models import Note
#/ start of endpoint get welcome  message

@app.route('/', methods=['GET'])
def index():
    return("Welcome to jotify")

#/ start of endpoint to retrieve or add a new note
@app.route('/api/notes', methods=['POST'])
def add_note():
    data = request.get_json()
    new_note = Note(title = data['title'].lower(), description = data['description'], priority=data['priority'], reminder_datetime=data['reminder_datetime'])

    db.session.add(new_note)
    db.session.commit()
    return jsonify(new_note.to_dict()), 201

#/start of endpoint to get all note
@app.route('/api/notes', methods=['GET'])
def get_notes():
    all_note = Note.query.all()
    return jsonify([note.to_dict() for note in all_note]), 200


#/start of  new endpoint to get note based on id
@app.route('/api/notes/<int:id>', methods=['GET'])
def get_note(id):
    note = Note.query.get(id)
    if not note:
        return jsonify({"error": "note not found"}), 404
    return jsonify(note.to_dict()), 200
#/end of endpoint


#/start pointupdatenote to update note based on id
@app.route('/api/notes/<int:id>', methods=['PUT'])
def update_note(id):
    data = request.get_json()
    note = Note.query.get(id)
    if not note:
        return jsonify({"error": "note not found"}), 404
    note.title = data.get('title', note.title)
    note.description = data.get('description', note.description)
    note.reminder_datetime =data.get('reminder_datetime', note.reminder_datetime)
    note.priority=data.get('priority', note.priority)
    db.session.commit()
    return jsonify(note.to_dict()), 200
#/end of update note


#/endpoint delete  all note 

@app.route('/api/notes/<int:id>', methods=['DELETE'])
def delete_note(id):
    note = Note.query.get(id)
    if not note:
        return jsonify({"error": "note not found"}), 404
    db.session.delete(note)
    db.session.commit()
    return jsonify({"message": "note deleted successfully"})
#/endpoint of delete note




#/start point of delete a note
@app.route('/api/notes', methods=['DELETE'])
def delete_notes():
    db.session.query(Note).delete()
    db.session.commit()
    return jsonify({"message": "notes deleted successfully"})
#/endpoint of delete all note

#/start of a new endpoint to search note based on title
@app.route('/api/notes/search', methods=['GET'])
def search_notes():
    search = request.args.get('title'.lower())
    search_notes = Note.query.filter(Note.title.like(f'%{search}%'))
    return jsonify([note.to_dict() for note in search_notes]), 200
#/end of search note

#/start of endpoint sorting


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)