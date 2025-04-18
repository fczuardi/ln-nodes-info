import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';
import NodeCard from './NodeCard.svelte';
import { displayCapacity, displayCountry, displayDate } from './valueRenderers';

describe('/nodes/NodeCard.svelte', () => {
  const alias = 'ACINQ';
  const publicKey = '03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f';
  const channels = 2298;
  const capacity = 36010516297;
  const firstSeen = 1522941222;
  const updatedAt = 1661274935;
  const country = {
    en: 'United States',
    'pt-BR': 'EUA',
  };
  const index = 0
  const props = { index, alias, publicKey, channels, capacity, firstSeen, updatedAt, country };

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
  test('should display capacity', propTextIsVisible(`${displayCapacity(capacity)} BTC`));
  test('should display firstSeen', propTextIsVisible(displayDate(firstSeen)));
  test('should display updatedAt', propTextIsVisible(displayDate(updatedAt)));
  test('should display country', propTextIsVisible(displayCountry(country, 'en')));
});
