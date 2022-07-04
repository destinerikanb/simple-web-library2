package book

type Service interface {
	FindAll() ([]Book, error)
	FindByID(ID int) (Book, error)
	Create(bookInput BookInput) (Book, error)
	Update(ID int, bookInput BookInput) (Book, error)
	Delete(ID int) (Book, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) FindAll() ([]Book, error) {
	books, err := s.repository.FindAll()
	return books, err
}

func (s *service) FindByID(ID int) (Book, error) {
	book, err := s.repository.FindByID(ID)
	return book, err
}

func (s *service) Create(bookInput BookInput) (Book, error) {

	book := Book{
		Title:       bookInput.Title,
		Description: bookInput.Description,
	}
	newBook, err := s.repository.Create(book)
	return newBook, err
}

func (s *service) Update(ID int, bookInput BookInput) (Book, error) {
	book, err := s.repository.FindByID(ID)

	book.Title = bookInput.Title
	book.Description = bookInput.Description
	newBook, err := s.repository.Update(book)
	return newBook, err
}

func (s *service) Delete(ID int) (Book, error) {
	book, err := s.repository.FindByID(ID)
	newBookList, err := s.repository.Delete(book)
	return newBookList, err
}
