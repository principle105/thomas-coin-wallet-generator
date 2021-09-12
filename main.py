from flask import Flask, render_template
from generate_wallet import generate_wallet
from replit import db

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
  public_key, private_key, address = generate_wallet()
  db["total"] += 1
  return render_template(
    "index.html", public_key=public_key, private_key=private_key, address=address, total=db["total"]
  )

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=8080, debug=True)