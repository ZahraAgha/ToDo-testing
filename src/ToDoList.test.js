import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './ToDoList';



test('renders todo list component', () => {
  render(<TodoList />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});

test('add todo to the list', () => {
  render(<TodoList />);
  const inputElement = screen.getByRole('textbox', { name: /add todo/i });
  const buttonElement = screen.getByRole('button', { name: /add todo/i });

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(buttonElement);

  const todoElement = screen.getByText('Test Todo');
  expect(todoElement).toBeInTheDocument();
});

test('delete todo from the list', () => {
  render(<TodoList />);
  const inputElement = screen.getByRole('textbox', { name: /add todo/i });
  const buttonElement = screen.getByRole('button', { name: /add todo/i });

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(buttonElement);

  const todoElement = screen.getByText('Test Todo');
  expect(todoElement).toBeInTheDocument();

  const deleteButtonElement = screen.getByRole('button', { name: /delete/i });
  fireEvent.click(deleteButtonElement);

  expect(todoElement).not.toBeInTheDocument();
});

