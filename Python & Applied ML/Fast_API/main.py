from fastapi import FastAPI
from enum import Enum

# @app.get("/")
# def root():
#     return {"message":"Hello world"}

# @app.get("/items/{item_id}")
# async def read_items(item_id):
#     return {"Item_id":item_id}



class ModuleName(str,Enum):
    Subject="Subject"
    classname = "classname"

app = FastAPI()

@app.get("/models/{subject_name}")
async def get_model(model_name: ModuleName):
    if model_name is ModuleName.Subject:
        return {"model_name": model_name, "message":"Got the subject!"}
    if model_name.classname == "classname":
        return {"model_name":model_name,"message":"Got the class name!"}
    return {"model_name":model_name,"message":"Have some residuals!"}