import { fireEvent, render } from '@testing-library/react';
import Input from '..';

describe('Input', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <Input
        onChange={() => {}}
        value="This is value"
        placeholder="This is a placeholder"
      />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(getByPlaceholderText('This is a placeholder')).toBeInTheDocument();
    expect(input.value).toBe('This is value');
  });

  it('can trigger onChange event', () => {
    const onChange = jest.fn();
    render(
      <Input
        onChange={onChange}
        value="This is value"
        placeholder="This is a placeholder"
      />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Changed value' } });
    expect(onChange).toHaveBeenCalledWith('Changed value');
  });
});
