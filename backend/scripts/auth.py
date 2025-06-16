import argparse
import bcrypt
from dotenv import load_dotenv
import os
from pathlib import Path
from pymongo import MongoClient
from pymongo.collection import Collection

load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / ".env")


# Sets authorization password
def set_password(password: str, collection: Collection):

    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(password, salt)

    result = collection.update_one(
        {"username": "Victor"}, {"$set": {"password": hash}}, upsert=True
    )

    if result.upserted_id:
        print("Successfully created password")
    elif result.modified_count > 0:
        print("Successfully updated password")
    else:
        print("Failed to update password or password was already up to date")


if __name__ == "__main__":

    parser = argparse.ArgumentParser()

    # Set password
    parser.add_argument(
        "-p",
        "--password",
        help="Sets the authorization password.",
        type=str,
        required=True,
    )

    args = parser.parse_args()

    # Connects to MongoDB
    try:
        client = MongoClient(host=os.getenv("mongoDBURI"))
        db = client["portfolio-db"]
        user_collection = db["auth-collection"]
        print("Connected to MongoDB")
    except Exception as e:
        print("Failed to connect to MongoDB")
        raise e

    # Sets authorization password
    set_password(password=args.password, collection=user_collection)
