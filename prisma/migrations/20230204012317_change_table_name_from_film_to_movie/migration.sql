/*
  Warnings:

  - You are about to drop the `Film` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Film";

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "ghibli_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_ghibli_id_key" ON "Movie"("ghibli_id");
