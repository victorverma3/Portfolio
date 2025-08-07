from dotenv import load_dotenv
import os
from pathlib import Path
from supabase import create_client

load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / ".env")

if __name__ == "__main__":

    # Connects to the Supabase client
    try:
        supabase = create_client(
            supabase_url=os.getenv("SUPABASE_URL"),
            supabase_key=os.getenv("SUPABASE_ANON_KEY"),
        )
    except Exception as e:
        raise Exception("Failed to connect to Supabase:", e)

    # Reads the files in the Supabase bucket
    response = supabase.storage.from_("files").list()
    files = ", ".join(file["name"] for file in response)
    print("Files:", files)
