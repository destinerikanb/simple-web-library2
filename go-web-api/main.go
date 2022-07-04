package main

import (
	"go-web-api/book"
	"go-web-api/handler"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	dsn := "host=localhost user=postgres password=ArvaLapak1209 dbname=gin-database port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Database error connection")
	}

	db.AutoMigrate(&book.Book{})

	bookRepository := book.NewRepository(db)
	bookService := book.NewService(bookRepository)
	bookHandler := handler.NewBookHandler(bookService)

	router := gin.Default()
	router.GET("/books", bookHandler.GetBooks)
	router.GET("/books/:id", bookHandler.GetBook)
	router.POST("/books", bookHandler.CreateBook)
	router.PUT("/books/:id", bookHandler.UpdateBook)
	router.DELETE("/books/:id", bookHandler.DeleteBook)
	router.Run()
}
