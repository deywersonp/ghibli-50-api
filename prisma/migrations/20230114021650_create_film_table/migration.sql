-- CreateTable
CREATE TABLE "Film" (
    "id" TEXT NOT NULL,
    "ghibli_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Film_ghibli_id_key" ON "Film"("ghibli_id");
