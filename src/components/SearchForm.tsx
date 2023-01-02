import { FormEvent, useRef } from 'react';

import { CiSearch } from 'react-icons/ci';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 30%;

  label {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 4rem;
    height: 4rem;
    padding: 0;
    background: transparent;
    border: 0;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 2rem;
      height: 2rem;
      color: #888;
    }

    span {
      display: none;
    }
  }

  input {
    z-index: 1;
    position: relative;
    display: block;
    width: 100%;
    height: 4rem;
    padding-inline: 4rem 1rem;
    border: .1rem solid #DDD;
    border-radius: .4rem;
    background: transparent;
  }

  button {
    display: none;
  }
`;

export default function SearchForm() {
  const id = useRef(`input-${Math.ceil(Math.random() * (10 ** 8))}`);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const { value } = Reflect.get(form, 'query');
    console.log(`검색어: ${value}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id.current}>
          <CiSearch />
          <span>검색어</span>
        </label>
        <input
          type="search"
          name="query"
          placeholder="검색어를 입력하세요"
          id={id.current}
        />
        <button type="submit">
          검색
        </button>
      </form>
    </Container>
  );
}
