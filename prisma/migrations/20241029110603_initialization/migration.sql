-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "keluhan" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);
