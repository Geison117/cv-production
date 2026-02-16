from . import models, schemas
from fastapi import FastAPI, APIRouter, Depends, HTTPException, status
from .database import engine, get_db
from .utils import hash_password, verify_password, create_access_token, get_current_user
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from .config import settings



models.Base.metadata.create_all(bind=engine)


app = FastAPI()

print(settings.APP_ENV)
print(settings.DATABASE_URL)
print(settings.SECRET_KEY)

origins = [
    #"https://cvapptool.netlify.app"     
    settings.FRONTEND_URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Hola Mundo XD"}


router = APIRouter(prefix="/users", tags=["Users"])

@router.post(
    "/register",
    response_model=schemas.UsuarioResponse,
    status_code=status.HTTP_201_CREATED
)
def register_user(user: schemas.UsuarioCreate, db: Session = Depends(get_db)):

    #  Verificar si el email ya existe
    existing_user = db.query(models.Usuario).filter(
        models.Usuario.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El email ya está registrado"
        )

    #  Hashear contraseña
    hashed_password = hash_password(user.password)

    # Crear usuario
    new_user = models.Usuario(
        nombre=user.nombre,
        email=user.email,
        password_hash=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

@router.get("/me")
def read_current_user(current_user: models.Usuario = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "nombre": current_user.nombre,
        "email": current_user.email
    }

app.include_router(router)

# Endpoint login
router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login", response_model=schemas.TokenResponse)
def login(user_credentials: schemas.LoginRequest, db: Session = Depends(get_db)):

    # 1️⃣ Buscar usuario
    user = db.query(models.Usuario).filter(
        models.Usuario.email == user_credentials.email
    ).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales inválidas: El usuario con el email ingresado no existe"
        )

    # 2️⃣ Verificar contraseña
    if not verify_password(user_credentials.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales inválidas: Contraseña incorrecta"
        )

    # 3️⃣ Crear token
    access_token = create_access_token(data={"user_id": user.id})

    

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


app.include_router(router)