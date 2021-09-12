import ecdsa
from ecdsa.curves import SECP256k1
from hashlib import sha256

def convert_to_address(public_key: str):
  return "T" + sha256(
      sha256(public_key.encode("utf-8")).hexdigest().encode("utf-8")
  ).hexdigest()[-40:]

def generate_wallet():
  private_key = ecdsa.SigningKey.generate(curve=SECP256k1)

  # Verifying key
  vk = private_key.get_verifying_key()

  public_key = vk.to_string().hex()

  private_key = private_key.to_string().hex()

  address = convert_to_address(public_key)

  return (public_key, private_key, address)