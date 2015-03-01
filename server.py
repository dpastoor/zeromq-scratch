import zmq
context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://127.0.0.1:5000")

while True:
    msg = socket.recv_json()
    print("GOT", msg['numbers'])
    socket.send_json(sum(msg['numbers']))