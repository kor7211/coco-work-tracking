from fastapi import APIRouter
import backend.database as databse

router = APIRouter(prefix="/api/history")

@router.get("/")
def get_hitory():
    # return all history
    ...


@router.get("/{history_id}")
def get_user(history_id: int):
    # return a specific hitory detail
    ...


@router.post("/")
def create_history():
    # create new hitory
    pass