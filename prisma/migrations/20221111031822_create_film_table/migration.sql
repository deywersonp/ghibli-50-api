-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "banner" TEXT NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);
