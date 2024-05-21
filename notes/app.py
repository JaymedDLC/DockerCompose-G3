from flask import Flask, request, jsonify

app = Flask(__name__)
notes = {}

@app.route('/notes', methods=['POST'])
def create_note():
    data = request.get_json()
    student_id = data.get('student_id')
    note = data.get('note')
    notes[student_id] = note
    return jsonify({"message": "Note created"}), 201

@app.route('/notes/<student_id>', methods=['GET'])
def get_note(student_id):
    note = notes.get(student_id)
    if note:
        return jsonify({"student_id": student_id, "note": note}), 200
    return jsonify({"message": "Note not found"}), 404
@app.route('/notes/<student_id>', methods=['PUT'])
def update_note(student_id):
    data = request.get_json()
    note = data.get('note')
    notes[student_id] = note
    return jsonify({"message": "Note updated"}), 200

@app.route('/notes/<student_id>', methods=['DELETE'])
def delete_note(student_id):
    if student_id in notes:
        del notes[student_id]
        return jsonify({"message": "Note deleted"}), 200
    return jsonify({"message": "Note not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
