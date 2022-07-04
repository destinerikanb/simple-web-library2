package book

import "time"

//Untuk membuat table pada database
type Book struct {
	ID          int
	Title       string
	Description string
	CreatedAt   time.Time
	UpdatedAt   time.Time
}
