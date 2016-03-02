import zmq
import json

array = '{"numbers": [1, 2, 3]}'
data = json.loads(array)
context = zmq.Context()
socket = context.socket(zmq.REQ)
socket.connect("tcp://127.0.0.1:5000")
socket.send_json(data)
print("Sending", data)
msg_in = socket.recv()
print(msg_in)
