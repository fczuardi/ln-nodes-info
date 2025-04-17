import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';
import NodeCard from './NodeCard.svelte';

describe('/nodes/NodeCard.svelte', () => {
  const alias = 'ACINQ';
  const publicKey = '03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f';
  const channels = 2298;
  const props = { alias, publicKey, channels };

  // utility function for basic check of if a text property gets its value rendered
  const propTextIsVisible = (propValue: string | number) => {
    return () => {
      render(NodeCard, props);
      expect(screen.getByText(propValue)).toBeInTheDocument();
    };
  };
  test('should render the card group', () => {
    render(NodeCard, props);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  test('should display alias', propTextIsVisible(alias));
  test('should use alias as the description', () => {
    render(NodeCard, props);
    expect(screen.getByRole('group')).toHaveAccessibleDescription(alias);
  });

  test('should display publicKey', propTextIsVisible(publicKey));
  test('should use publicKey as subtitle', () => {
    render(NodeCard, props);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(publicKey);
  });

  test('should display channels', propTextIsVisible(channels));
  test.todo('should display capacity');
  test.todo('should display firstSeen');
  test.todo('should display updatedAt');
  test.todo('should display country');
});
