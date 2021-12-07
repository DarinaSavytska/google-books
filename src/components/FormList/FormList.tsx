import React from 'react';

type Props = {
  searchBook: string,
  setSearchBook: (event: string) => void,
  selectedCategory: string,
  setSelectedCategory: (event: string) => void,
  sortBy: string,
  setSortBy: (event: string) => void,
  getBook: () => void,
  totalBook: string | number,
  setLoad: (text: string) => void,
  setShowMessage: (mes: boolean) => void,
  setPage: (page: number) => void,
}

export const FormList: React.FC<Props> = ({
  searchBook,
  setSearchBook,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  getBook,
  totalBook,
  setLoad,
  setShowMessage,
  setPage
}) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event.target.value);
  };

  const handleSelectedFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSelectedSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <form
        className="App__form"
        onSubmit={(event) => {
          event.preventDefault();
          // setSearchBook('');
        }}
      >
        <input
          type="text"
          className="App__form--item App__input"
          placeholder="Search book"
          value={searchBook}
          onChange={handleInput}
        />

        <div>
          {'Categories '}
          <select
            value={selectedCategory}
            onChange={handleSelectedFilter}
            className="App__form--item"
          >
            <option value="">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </div>

        <div>
          {'Sorting by '}
          <select
            value={sortBy}
            onChange={handleSelectedSort}
            className="App__form--item"
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <button
          className="App__form--item"
          onClick={() => {
            getBook();
            setShowMessage(true);
            setLoad('load')
            setPage(-30)
          }}
        >
          Search
        </button>

      </form>

      {totalBook > 0 &&
        <a
          href="#root"
          className="App__buttonUp"
        >
          &uarr;
        </a>
      }
    </div>
  );
};
